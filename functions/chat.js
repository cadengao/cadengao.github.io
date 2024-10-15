const mysql = require('mysql2/promise');
const crypto = require('crypto');

// 获取数据库连接配置
const connectionConfig = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	connectTimeout: process.env.DB_CONNECT_TIMEOUT
};

const _token = process.env.WX_TOKEN; // 将Token设为环境变量

exports.handler = async (event, context) => {
	// 处理 GET 请求
	if (event.httpMethod === 'GET') {
		const {
			signature,
			timestamp,
			nonce,
			echostr
		} = event.queryStringParameters || {};

		if (Check(signature, timestamp, nonce, _token)) {
			// 返回随机字符串表示验证通过
			return {
				statusCode: 200,
				headers: {
					'Access-Control-Allow-Origin': '*', // 允许的来源
					'Content-Type': 'text/plain' // 设置内容类型
				},
				body: echostr,
			};
		} else {
			// 返回失败消息
			return {
				statusCode: 403,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'text/plain'
				},
				body: `failed: ${signature}, ${GetSignature(timestamp, nonce, _token)}. 如果你在浏览器中看到这句话，说明此地址可以被作为微信公众账号后台的Url，请注意保持Token一致。`,
			};
		}
	}

	// 处理 POST 请求
	if (event.httpMethod === 'POST') {
		// 解析请求体
		const requestBody = JSON.parse(event.body || '{}');

		// 检查请求体中的必需字段
		if (!requestBody || !requestBody.Content || !requestBody.CreateTime || !requestBody.MsgType) {
			return {
				statusCode: 400,
				headers: {
					'Access-Control-Allow-Origin': '*', // 允许的来源
					'Content-Type': 'application/json' // 设置内容类型
				},
				body: JSON.stringify({
					message: 'Content, CreateTime, and MsgType are required.'
				}),
			};
		}

		const {
			Content,
			CreateTime,
			MsgType
		} = requestBody;

		// 转换时间戳为日期
		const dateTime = new Date(CreateTime * 1000); // CreateTime 是 Unix 时间戳

		try {
			// 创建数据库连接
			const connection = await mysql.createConnection(connectionConfig);

			// 插入记录的 SQL 语句
			const sql = 'INSERT INTO tb_wxchatrecords (Content, CreateTime, MsgType) VALUES (?, ?, ?)';
			const params = [Content, dateTime, MsgType];

			// 执行插入操作
			const [result] = await connection.execute(sql, params);

			// 关闭连接
			await connection.end();

			// 返回成功响应
			return {
				statusCode: 200,
				headers: {
					'Access-Control-Allow-Origin': '*', // 允许的来源
					'Content-Type': 'application/json' // 设置内容类型
				},
				body: JSON.stringify({
					message: 'Record inserted successfully.',
					id: result.insertId
				}),
			};
		} catch (error) {
			console.error('Database insert error:', error);
			return {
				statusCode: 500,
				headers: {
					'Access-Control-Allow-Origin': '*', // 允许的来源
					'Content-Type': 'application/json' // 设置内容类型
				},
				body: JSON.stringify({
					message: 'Internal Server Error',
					error: error.message
				}),
			};
		}
	}

	// 返回方法不允许的错误
	return {
		statusCode: 405,
		headers: {
			'Access-Control-Allow-Origin': '*', // 允许的来源
			'Content-Type': 'application/json' // 设置内容类型
		},
		body: JSON.stringify({
			message: 'Method not allowed.'
		}),
	};
};

// 检查签名是否正确
function Check(signature, timestamp, nonce, token) {
	return signature === GetSignature(timestamp, nonce, token);
}

// 返回正确的签名
function GetSignature(timestamp, nonce, token) {
	const arr = [token, timestamp, nonce].sort();
	const arrString = arr.join('');
	const sha1 = crypto.createHash('sha1');
	sha1.update(arrString);
	return sha1.digest('hex');
}