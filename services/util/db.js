const pg = require('pg');

// TODO - This should come from env variables
const dbcredentials = {
  username: process.env.FR_DB_USERNAME,
  password: process.env.FR_DB_PASSWORD,
  host: process.env.FR_DB_HOST,
  database: process.env.FR_DB_NAME,
  port: process.env.FR_DB_PORT,
};

exports.client = () => {
  const conString = `pg://${dbcredentials.username}:${dbcredentials.password}@${dbcredentials.host}:${dbcredentials.port}/${dbcredentials.database}`;
  const client = new pg.Client(conString);
  return client;
};
