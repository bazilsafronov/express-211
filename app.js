require('@babel/register')
const express = require("express");
const path = require('path');
const serverConfig = require('./src/serverConfig');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const Main = require('./src/view/components/Main');
const UserApiRouter = require('./src/router/user.api.router');

const app = express();
serverConfig(app);

const PORT = process.env.PORT || 3033;

app.use('/api', UserApiRouter);

app.get("/", (req, res) => {
    console.log(req);
    res.send('Hello bro!');
})

app.get('/send-file', (req, res)=> {
    res.sendFile('index.html', { root: path.join(__dirname, 'public')});
})


app.listen(PORT, () => console.log("Server is start..."));
