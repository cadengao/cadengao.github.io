const axios = require('axios');

exports.handler = async (event, context) => {
  const TARGET_URL = 'http://cadenbasefile.cadengao.com';
  
  try {
    const path = event.path.replace('/.netlify/functions/cadengaofileapi', '');
    if (!path.startsWith('/cadenbasefileapi')) {
      return { statusCode: 404, body: 'Not Found' };
    }

    const targetPath = path.replace('/cadenbasefileapi', '');
    const targetUrl = `${TARGET_URL}${targetPath}${event.rawQuery ? '?' + event.rawQuery : ''}`;

    const response = await axios({
      method: event.httpMethod,
      url: targetUrl,
      data: event.body,
      headers: event.headers,
      responseType: 'text'
    });

    return {
      statusCode: response.status,
      headers: {
        'Content-Type': response.headers['content-type'],
        'Access-Control-Allow-Origin': '*'
      },
      body: response.data
    };
  } catch (error) {
    return { statusCode: 500, body: `Proxy Error: ${error.message}` };
  }
};