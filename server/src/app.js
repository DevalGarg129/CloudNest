const express = require('express');
const app = express();

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    res.send(`Server is running on PORT ${PORT}`);
})