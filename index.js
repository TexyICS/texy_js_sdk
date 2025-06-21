const { init } = require('./config');
const sendMessage = require('./lib/sendMessage');
const getLogs = require('./lib/getLogs');
const getLogsByUserId = require('./lib/getLogsByUserId');

module.exports = {
  init,              // Pour configurer la clé API
  sendMessage,
  getLogs,
  getLogsByUserId
};
