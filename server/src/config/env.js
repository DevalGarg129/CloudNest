const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	port: process.env.PORT || 9001,
	mongodbUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cloudnest"
};
