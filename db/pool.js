const { Pool } = require('pg');
const {Client}=require("pg");
const path=require("node:path")
const fs = require('fs');
require("dotenv").config();
const pool = new Pool({
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_PORT}?sslmode=require`,
  ssl: { ca: fs.readFileSync(process.env.DB_SSL_CERT).toString() }
});

module.exports = pool;
console.log("CA cert path:", path.resolve(process.env.DB_SSL_CERT));


const client = new Client({
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  ssl: {
    ca: fs.readFileSync(path.resolve(process.env.DB_SSL_CERT)).toString(),
    rejectUnauthorized: true // Keep this true for security
  }
});
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});