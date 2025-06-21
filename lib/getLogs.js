const axios = require('axios');
const { getConfig } = require('../config');

module.exports = async function getLogs() {
  const { apiKey, baseUrl } = getConfig();

  try {
    const response = await axios.get(`${baseUrl}/logs/apikey`, {
      headers: {
        'x-api-key': apiKey
      }
    });

    return response.data;
  } catch (err) {
    throw {
      type: 'GET_LOGS_ERROR',
      status: err.response?.status,
      message: err.response?.data?.message || err.message
    };
  }
};
