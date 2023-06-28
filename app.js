const express = require("express");
const serverConfig = require('./src/serverConfig');

const app = express();
serverConfig(app);

const PORT = process.env.PORT || 3033;

app.get("/", (req, res) => {
    console.log(req);
    res.send('Hello bro!')
})

app.listen(PORT, () => console.log("Server is start..."));
