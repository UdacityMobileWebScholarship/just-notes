const mongoose = require('mongoose')
const config = require('./env')

mongoose.connect(config.mongoUri, (err) => {
    if (err) {
        throw err
    } else {
        console.log("mongodb connected:D")
    }
})

module.exports = mongoose
