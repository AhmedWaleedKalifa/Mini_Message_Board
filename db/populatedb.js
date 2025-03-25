require("dotenv").config();
const fs = require('fs');
const path=require("node:path")
const {Client}=require("pg");

const SQL=`
CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255),
    username VARCHAR(255),
    date VARCHAR(255)
);

INSERT INTO messages (text,username,date)
VALUES
('TestMessage','TestUser','TestDate');
`
async function main(){
    console.log("running");
    const client =new Client({
        connectionString:process.env.CONNECTION_STRING,
        ssl: {
          ca: fs.readFileSync(path.resolve(process.env.DB_SSL_CERT)).toString(),
          rejectUnauthorized: true 
        }
      })
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("DONE!!!")
}

main();