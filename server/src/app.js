const helment = require("helmet");
const cors = require("cors");
const express = require('express');
const app = express();

app.use(helment()); //add http related security headers to the response
app.use(cors()); //cors controll whether the browser allow this cross-origin communication or not 
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "CloudNest API is running successfully"
    })
});

module.exports = app;