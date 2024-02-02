const express = require("express");
const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const pool = require("./config/database/db.js");
dotenv.config({ path: "./config/config.env" });

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(fileUpload());


// Routes Import

const user = require('./routes/userRoutes.js')



app.use("/api",user);




app.get("/get/users", async (req,res) => {
  try{
  
      const users = await pool.query(
          "SELECT * FROM users"
      );

      res.status(200).json({
          success: true,
          users: users.rows
      })        

  }catch(err){
      res.status(500).json({
          success: false,
          message: err.message
      })
  }
})



app.get("/api/v1/test", (req, res) => {
  res.json("I am working");
});

module.exports = app;
