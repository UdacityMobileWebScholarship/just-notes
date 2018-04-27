const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
 
//parsers
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// server client files
app.use(express.static(__dirname + "/../client/build"))
app.get('/', (req, res)=>{
   res.sendFile('/../client/build/index.html')
})

// redirector
app.get('*', (req, res) => {
  res.redirect('/')
})


//routes
app.use("/notes", require("./controllers/notes.controller"))


module.exports = app
