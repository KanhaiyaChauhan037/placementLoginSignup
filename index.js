const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());

require("dotenv").config()
const cors = require("cors");
const connect = require("./config/db");
const userRouter = require("./routes/user/user.router");
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.get("/", async (req, res) => {
    res.status(200).send("LOGIN PAGE");
}); 
app.listen(PORT, async () => {
  await connect();
  console.log(" server started on 8080");
});
  


