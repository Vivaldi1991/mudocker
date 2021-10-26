const mongoose = require('mongoose');
const { db } = require('../config');

module.exports.connectDb = () => {
    mongoose.connect(db);
    return mongoose.connection;
}
