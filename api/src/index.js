const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const { connectDb } = require('./helpers/db');
const { port, host, db, authApiUrl} = require('./config');
const app = express();

const postSchema = new mongoose.Schema({
    name: String
});

const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service at PORT:${port}`);
        console.log(`Started api service at HOST:${host}`);
        console.log(`Database:${db}`);

        const silence = new Post({ name: 'Silence' });
        silence.save(function(err, result) {
            if (err) return console.error(err);
            console.log("result", result);
        });

    });
} 

app.get('/test', (req, res) => {
    res.send("Our api server is real working correctly o");
});

app.get('/api/testapidata', (req, res) => {
    res.json({
        testwithapi: true,
    });
});

app.get('/testwithcurrentuser', (req, res) => {
    axios.get(authApiUrl + '/currentUser').then(response => {
        res.json({
            testwithcurrentsuser: true,
            currentUserFromAuth: response.data
        });
    });
});

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)

