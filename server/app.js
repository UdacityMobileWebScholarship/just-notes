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


// redirector
app.get('*', (req, res) => {
  res.status(404)
})


//routes
app.use("/", require("./routes/notes"))


module.exports = app
