const mongoose = require("mongoose");
const { MONGODB_URI } = require("./env");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Mongodb connected successfully");
    }catch(err){
        console.error("Error connecting to MongoDB: ", err.message);
    }
};

module.exports = connectDB;