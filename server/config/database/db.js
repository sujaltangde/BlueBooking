const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const pool = new Pool({
  connectionString: process.env.DBCONNECTION + "?sslmode=require",
});

async function checkDatabaseConnection() {
  try {
    const client = await pool.connect();
    console.log('database connected succesfully');
    client.release(); 
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

// Invoke the function to check the database connection
checkDatabaseConnection();


module.exports = pool;
