require('dotenv').config();

const app = require('./app');
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 9001;
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
