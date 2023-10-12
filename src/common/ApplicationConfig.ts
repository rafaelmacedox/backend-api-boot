import fs from 'fs';

const ENVIRONMENT = process.env.NODE_ENV;
const FILENAME = `.env.${ENVIRONMENT}`;

if (fs.existsSync(FILENAME)) {
  require('dotenv').config({ path: FILENAME });
} else {
  console.log(`${FILENAME} not found`);
}

const ApplicationConfig = {
  PORT: process.env.PORT || 3003,
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_EXPIRESIN: process.env.JWT_EXPIRESIN || 1,
  LOG_TOKEN: process.env.LOG_TOKEN,
  LOG_LEVEL: process.env.LOG_LEVEL || 'error',
}

export default ApplicationConfig;