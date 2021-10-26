const express = require('express');
const mongoose = require('mongoose');
const { connectDb } = require('./helpers/db');
const { port, host, db} = require('./config');
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

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)

