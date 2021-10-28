const express = require('express');
const axios = require('axios');
const { connectDb } = require('./helpers/db');
const { port, host, db, apiUrl} = require('./config');
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

app.get('/testwithapidata', (req, res) => {
    axios.get(apiUrl + '/testapidata').then(response => {
        res.json({
            testapidata: response.data
        });
    });
});

app.get('/api/currentUser', (req, res) => {
    res.json({
       id: "123",
       email: "foo@gmail.com"
    });
});

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)

