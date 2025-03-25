const { Pool } = require('pg');
const {Client}=require("pg");
const path=require("node:path")
const fs = require('fs');
require("dotenv").config();
const pool = new Pool({
    connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    ssl: {
      ca: fs.readFileSync(path.resolve(process.env.DB_SSL_CERT)).toString(),
      rejectUnauthorized: true 
    }
  });

module.exports = pool;
