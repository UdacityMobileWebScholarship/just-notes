const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const mongoDb = require('./config/mongoDB') 

//parsers
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//routes
app.use("/", require("./routes/index"))


// redirector
app.get('*', (req, res) => {
  res.status(404)
})

module.exports = app
