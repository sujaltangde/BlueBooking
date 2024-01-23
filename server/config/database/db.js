const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const pool = new Pool({
  connectionString: process.env.DBCONNECTION + "?sslmode=require",
});

module.exports = pool;
