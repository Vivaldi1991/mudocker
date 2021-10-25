const express = require('express');
const { connectDb } = require('./helpers/db');
const { port, host, db} = require('./config');

const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service at PORT:${port}`);
        console.log(`Started api service at HOST:${host}`);
        console.log(`Database:${db}`);
    });
} 

app.get('/test', (req, res) => {
    res.send("Our api server is working correctly");
});

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)

