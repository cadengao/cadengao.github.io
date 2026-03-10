const crypto = require('crypto');
const xml2js = require('xml2js');
const { MongoClient } = require('mongodb');
const axios = require("axios");

// =============== 环境变量配置 ===============
const connectionConfig = {
	// 微信相关配置
	wxToken: process.env.WX_TOKEN,
	clearFlag: process.env.CLEAR_FLAG,

	// MongoDB 相关配置
	mongodbUri: process.env.MONGODB_URI,
	mongodbTls: process.env.MONGODB_TLS !== 'false',
	dbName: process.env.DB_NAME || 'chatbase',
	collectionName: process.env.COLLECTION_NAME || 'chat_data',

	// 连接池配置
	maxPoolSize: process.env.MONGODB_MAX_POOL_SIZE ? parseInt(process.env.MONGODB_MAX_POOL_SIZE) : 10,
	minPoolSize: process.env.MONGODB_MIN_POOL_SIZE ? parseInt(process.env.MONGODB_MIN_POOL_SIZE) : 2,
	maxIdleTimeMS: process.env.MONGODB_MAX_IDLE_TIME_MS ? parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS) : 30000
};

// 验证必要环境变量
if (!connectionConfig.wxToken) {
	console.error('❌ 请设置 WX_TOKEN 环境变量');
}
if (!connectionConfig.clearFlag) {
	console.error('❌ 请设置 CLEAR_FLAG 环境变量');
}
if (!connectionConfig.mongodbUri) {
	throw new Error('❌ 请设置 MONGODB_URI 环境变量');
}

// =============== MongoDB 连接配置 ===============
let cachedClient = null;
let cachedDb = null;

/**
 * 连接到数据库
 */
async function connectToDatabase() {
	// 如果已有缓存，直接返回
	if (cachedDb) {
		return cachedDb;
	}

	try {
		// 创建 MongoClient 实例
		const client = new MongoClient(connectionConfig.mongodbUri, {
			serverApi: {
				version: MongoClient.ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
			tls: connectionConfig.mongodbTls,
			tlsAllowInvalidCertificates: true,
			maxPoolSize: connectionConfig.maxPoolSize,
			minPoolSize: connectionConfig.minPoolSize,
			maxIdleTimeMS: connectionConfig.maxIdleTimeMS
		});

		// 连接到 MongoDB
		await client.connect();

		// 发送 ping 命令确认连接成功
		await client.db('admin').command({ ping: 1 });
		await logContentWithGet('✅ MongoDB 连接成功，Stable API v1');

		// 获取数据库
		const db = client.db(connectionConfig.dbName);

		// 缓存连接
		cachedClient = client;
		cachedDb = db;

		return db;
	} catch (error) {
		console.error('❌ 连接 MongoDB 失败:', error);

		// 发生错误时清理缓存
		cachedClient = null;
		cachedDb = null;
		throw error;
	}
}

/**
 * 获取指定集合
 */
async function getChatDataCollection() {
	const db = await connectToDatabase();
	return db.collection(connectionConfig.collectionName);
}

/**
 * 安全关闭连接
 */
async function closeConnection() {
	try {
		if (cachedClient) {
			await cachedClient.close();
			await logContentWithGet('🔌 MongoDB 连接已关闭');
			cachedClient = null;
			cachedDb = null;
		}
	} catch (error) {
		console.error('关闭连接时出错:', error);
	}
}
// =============== MongoDB 连接配置结束 ===============
async function logContentWithGet(content) {
	try {
		const response = await axios.get('http://43.142.242.91/api/values', {
			params: {
				content: content
			}
		});
		//await logContentWithGet('记录成功:', response.data);
		return response.data;
	} catch (error) {
		console.error('记录失败:', error);
		throw error;
	}
}
exports.handler = async (event, context) => {
	// 处理 SIGINT 和 SIGTERM 信号
	context.callbackWaitsForEmptyEventLoop = false;
	await logContentWithGet("1.开始");
	await logContentWithGet('Received event:', JSON.stringify(event)); // Log the received event

	// 处理 GET 请求
	if (event.httpMethod === 'GET') {
		const {
			signature,
			timestamp,
			nonce,
			echostr
		} = event.queryStringParameters || {};
		await logContentWithGet("2.get");

		if (Check(signature, timestamp, nonce, connectionConfig.wxToken)) {
			await logContentWithGet("3.get.check");
			return {
				statusCode: 200,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'text/plain'
				},
				body: echostr,
			};
		} else {
			await logContentWithGet("3.get.!check");
			return {
				statusCode: 403,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'text/plain'
				},
				body: `failed: ${signature}, ${GetSignature(timestamp, nonce, connectionConfig.wxToken)}. 如果你在浏览器中看到这句话，说明此地址可以被作为微信公众账号后台的Url，请注意保持Token一致。`,
			};
		}
	}

	// 处理 POST 请求
	if (event.httpMethod === 'POST') {
		await logContentWithGet('Raw body:', event.body); // Log the raw request body
		await logContentWithGet("2.post");

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
			// 获取 MongoDB 集合
			const chatDataCollection = await getChatDataCollection();
			await logContentWithGet("3.post.",Content);

			// 检查 Content 值
			if (Content[0] === connectionConfig.clearFlag) {
				await logContentWithGet("4.post.clear");
				// 删除所有文档
				const deleteResult = await chatDataCollection.deleteMany({});

				await logContentWithGet(`已清空 ${connectionConfig.collectionName} 集合，删除文档数: ${deleteResult.deletedCount}`);

				// 返回成功响应
				return {
					statusCode: 200,
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						message: 'All records deleted successfully.',
						deletedCount: deleteResult.deletedCount
					}),
				};
			} else {
				// 创建要插入的文档对象
				await logContentWithGet("4.post.insert",Content[0]);
				const document = {
					Content: Content[0],
					CreateTime: dateTime,
					MsgType: MsgType[0],
					createdAt: new Date(),
					// 可选：添加原始消息的更多字段
					rawXML: event.body // 保存原始XML用于调试
				};

				// 可选：添加其他可能存在的字段
				if (requestBody.xml.ToUserName) document.ToUserName = requestBody.xml.ToUserName[0];
				if (requestBody.xml.FromUserName) document.FromUserName = requestBody.xml.FromUserName[0];
				if (requestBody.xml.MsgId) document.MsgId = requestBody.xml.MsgId[0];

				// 执行插入操作
				const result = await chatDataCollection.insertOne(document);

				// 返回成功响应
				const response = {
					statusCode: 200,
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						message: 'Record inserted successfully.',
						id: result.insertedId, // MongoDB 使用 insertedId
						insertedCount: result.insertedCount
					}),
				};
				//await logContentWithGet('Response:', response); // Log the response
				return response;
			}
		} catch (error) {
			console.error('Database operation error:', error);
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
		} finally {
			// 注意：在云函数环境中，通常不需要手动关闭连接
			// 因为连接池会被复用，但如果您想关闭连接，可以调用 closeConnection()
			// await closeConnection();
		}
	}
	await logContentWithGet("5.其他",event.httpMethod );

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

// 添加进程退出时的清理钩子
if (typeof process !== 'undefined') {
	process.on('SIGINT', async () => {
		await logContentWithGet('🔄 收到 SIGINT 信号，正在关闭数据库连接...');
		await closeConnection();
		process.exit(0);
	});

	process.on('SIGTERM', async () => {
		await logContentWithGet('🔄 收到 SIGTERM 信号，正在关闭数据库连接...');
		await closeConnection();
		process.exit(0);
	});
}