const authService = require("../services/authService.js");

// Controller function to handle user registration
const register = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success: true,
                message: "Name, email and password are required"
            });
        };

        const user = await authService.registerUser(
            name, 
            email, 
            password
        );

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    }catch(error){
        console.error("Error registering user: ", error.message);
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Controller function to handle user login
const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const { user, token } = await authService.loginUser(
            email, password
        );

        return res.status(200).json({
            success: true,
            message: "User logged i successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    }catch(error){
        console.log("Error :", error.message);
        return res.status(401).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    register,
    login,
}