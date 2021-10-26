const express = require('express');
const { connectDb } = require('./helpers/db');
const { port, host, db} = require('./config');
const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started auth service at PORT:${port}`);
        console.log(`Started auth service at HOST:${host}`);
        console.log(`auth Database:${db}`);
    });
} 

app.get('/test', (req, res) => {
    res.send("Our auth server is real working correctly o");
});

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)

