const mysql = require('mysql2/promise');

// 获取数据库连接配置
const connectionConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: process.env.DB_CONNECT_TIMEOUT
};

async function createConnectionWithRetry(retries = 3) {
    while (retries) {
        try {
            const connection = await mysql.createConnection(connectionConfig);
            return connection;
        } catch (error) {
            console.error('Database connection error:', error);
            retries -= 1;
            if (retries === 0) {
                throw new Error('Unable to connect to the database after several attempts');
            }
            // 等待一段时间后重试
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
}

exports.handler = async (event, context) => {
    const { sql } = event.queryStringParameters || {};
    
    if (!sql || !sql.trim()) {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'SQL query is required.' }),
        };
    }

    try {
        // 创建数据库连接
        const connection = await createConnectionWithRetry();
        
        // 执行查询
        const [rows] = await connection.execute(sql);

        // 关闭连接
        await connection.end();

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rows),
        };
    } catch (error) {
        console.error('Database query error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
        };
    }
};
