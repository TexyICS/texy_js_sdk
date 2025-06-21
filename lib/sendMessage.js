const axios = require('axios');
const { getConfig } = require('../config');

module.exports = async function sendMessage({ number, message, userId = null }) {
  const { apiKey, baseUrl } = getConfig();

  try {
    const response = await axios.post(`${baseUrl}/logs/sendsms`, {
      number,
      message,
      id_user: userId
    }, {
      headers: {
        'x-api-key': apiKey
      }
    });

    return response.data;
  } catch (err) {
    throw {
      type: 'SEND_MESSAGE_ERROR',
      status: err.response?.status,
      message: err.response?.data?.message || err.message
    };
  }
};
