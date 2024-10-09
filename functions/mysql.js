const mysql = require('mysql2/promise');

// 获取数据库连接配置
const connectionConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

// 存储 SQL 查询结果的缓存
let queryCache = {};

exports.handler = async (event, context) => {
    // 解析查询字符串参数
    const { sql } = event.queryStringParameters || {};
    
    // 如果传入的 sql 为空，清空缓存
    if (!sql) {
        queryCache = {};  // 清空缓存
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Query cache cleared.' }),
        };
    }

    // 返回错误信息，如果 sql 为空或无效
    if (!sql.trim()) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'SQL query is required.' }),
        };
    }

    // 检查缓存中是否已存在查询结果
    if (queryCache[sql]) {
        return {
            statusCode: 200,
            body: JSON.stringify(JSON.parse(queryCache[sql])),
        };
    }

    try {
        // 创建数据库连接
        const connection = await mysql.createConnection(connectionConfig);
        
        // 执行查询
        const [rows] = await connection.execute(sql);
        
        // 将结果存入缓存
        queryCache[sql] = JSON.stringify(rows);

        // 关闭连接
        await connection.end();

        // 返回查询结果
        return {
            statusCode: 200,
            body: JSON.stringify(rows),
        };
    } catch (error) {
        console.error('Database query error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
        };
    }
};
