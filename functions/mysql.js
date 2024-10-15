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

exports.handler = async (event, context) => {
    // 解析查询字符串参数
    const { sql } = event.queryStringParameters || {};
    
    // 返回错误信息，如果 sql 为空或无效
    if (!sql || !sql.trim()) {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*', // 允许的来源
                'Content-Type': 'application/json' // 设置内容类型
            },
            body: JSON.stringify({ message: 'SQL query is required.' }),
        };
    }

    try {
        // 创建数据库连接
        const connection = await mysql.createConnection(connectionConfig);
        console.log('sql:', sql); 
        // 执行查询
        const [rows] = await connection.execute(sql);

        // 关闭连接
        await connection.end();

        // 返回查询结果
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // 允许的来源
                'Content-Type': 'application/json' // 设置内容类型
            },
            body: JSON.stringify(rows),
        };
    } catch (error) {
        console.error('Database query error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*', // 允许的来源
                'Content-Type': 'application/json' // 设置内容类型
            },
            body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
        };
    }
};
