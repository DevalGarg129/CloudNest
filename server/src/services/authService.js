const bcrypt = require("bcryptjs");
const User = require("../models/User.js");

// Service function to register a new user
const registerUser = async (name, email, password) => {
    const existingUser = await User.findOne({ email });

    if(existingUser){
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        hashPassword,
    });
    return user;
};

// Service function to login a user
const loginUser = async (email, password) => {
    const user = await User.findOne({ email });

    if(!user){
        throw new Error("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(
        password, 
        user.hashPassword
    );

    if(!isPasswordCorrect){
        throw new Error("Invalid password");
    }

    return {
        user,
        token
    };
};

module.exports = {
    registerUser,
    loginUser
};

