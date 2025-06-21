const config = {
  apiKey: '',
  baseUrl: 'http://localhost:3001' 
};

function init({ apiKey, baseUrl }) {
  config.apiKey = apiKey;
  if (baseUrl) {
    config.baseUrl = baseUrl;
  }
}

function getConfig() {
  return config;
}

module.exports = {
  init,
  getConfig
};

