const mysql = require('mysql2/promise');
const crypto = require('crypto');
const xml2js = require('xml2js');

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
	//console.log('Received event:', JSON.stringify(event)); // Log the received event

	// 处理 GET 请求
	if (event.httpMethod === 'GET') {
		const {
			signature,
			timestamp,
			nonce,
			echostr
		} = event.queryStringParameters || {};

		if (Check(signature, timestamp, nonce, _token)) {
			return {
				statusCode: 200,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'text/plain'
				},
				body: echostr,
			};
		} else {
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
		//console.log('Raw body:', event.body); // Log the raw request body

		// 解析 XML 请求体
		let requestBody;
		try {
			// 使用 xml2js 解析 XML
			const parser = new xml2js.Parser();
			requestBody = await parser.parseStringPromise(event.body);
		} catch (error) {
			console.error('Failed to parse XML:', error);
			return {
				statusCode: 400,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					message: 'Invalid XML format.'
				}),
			};
		}

		// 检查请求体中的必需字段
		const {
			Content,
			CreateTime,
			MsgType
		} = requestBody.xml;
		if (!Content || !CreateTime || !MsgType) {
			return {
				statusCode: 400,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					message: 'Content, CreateTime, and MsgType are required.'
				}),
			};
		}

		// 转换时间戳为日期
		const dateTime = new Date(CreateTime * 1000); // CreateTime 是 Unix 时间戳

		try {
			// 创建数据库连接
			const connection = await mysql.createConnection(connectionConfig);

			// 插入记录的 SQL 语句
			const sql = 'INSERT INTO tb_wxchatrecords (Content, CreateTime, MsgType) VALUES (?, ?, ?)';
			const params = [Content[0], dateTime, MsgType[0]]; // XML 字段通常是数组

			// 执行插入操作
			const [result] = await connection.execute(sql, params);

			// 关闭连接
			await connection.end();

			// 返回成功响应
			const response = {
				statusCode: 200,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					message: 'Record inserted successfully.',
					id: result.insertId
				}),
			};
			//console.log('Response:', response); // Log the response
			return response;
		} catch (error) {
			console.error('Database insert error:', error);
			return {
				statusCode: 500,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
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
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
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