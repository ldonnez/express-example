'use strict';

const env = process.env;

module.exports = {
  PORT: env.PORT || 3000,
  ENVIRONMENT: env.ENVIRONMENT || 'local',
  MONGODB_URI: env.MONGODB_URI || 'mongodb://localhost/test',
  APP_URL: env.APP_URL || 'https://localhost:4200',
  API_ROOT: env.API_ROOT || 'https://localhost:5000',
  API_URL: `${env.API_ROOT}/api/v1`
};
