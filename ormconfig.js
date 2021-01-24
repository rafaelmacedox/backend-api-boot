const fs = require('fs');
const ENVIRONMENT = process.env.NODE_ENV || 'development';
const FILENAME = `.env.${ENVIRONMENT}`;

if(fs.existsSync(FILENAME)) {
  require('dotenv').config({ path: FILENAME});
}else{
  console.log(`${FILENAME} not found`);
}

module.exports = {
   "type": process.env.TCONNECTION,
   "host": process.env.THOST,
   "port": process.env.TPORT,
   "username": process.env.TUSERNAME,
   "password": process.env.TPASSWORD,
   "database": process.env.TDATABASE,
   "schema": "public",
   "synchronize": false,
   "logging": process.env.TLOGGING,
   "entities": [
      process.env.TENTITIES
   ],
   "migrations": [
      process.env.TMIGRATIONS
   ],
   "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/database/migrations"
   }
}
