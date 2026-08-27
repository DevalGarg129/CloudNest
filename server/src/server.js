require('dotenv').config();

const app = require('./app');
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 9001;
connectDB();

app.listen(PORT, () => {
    console.log("Server Started Successfully");
    console.log(`CloudNest is Working on PORT ${PORT}`);
});
