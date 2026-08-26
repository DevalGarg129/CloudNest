const mongoose = require("mongoose");
const { mongodbUri } = require("./env");

const connectDB = async () => {
    try{
        await mongoose.connect(mongodbUri);

        console.log("Mongodb connected successfully");
    }catch(err){
        console.error("Error connecting to MongoDB: ", err.message);
    }
};

module.exports = connectDB;