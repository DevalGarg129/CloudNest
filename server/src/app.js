const helment = require("helmet");
const cors = require("cors");
const express = require('express');
const app = express();

const authRoutes = require("./routes/authRoutes.js");

app.use(helment()); //add http related security headers to the response
app.use(cors()); //cors controll whether the browser allow this cross-origin communication or not 
app.use(express.json());

app.use("/api/auth", authRoutes);

console.log("Application is Working fine")
module.exports = app;