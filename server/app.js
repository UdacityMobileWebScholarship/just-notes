const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const routes = require("./api/routes/");

mongoose.connect("mongodb://localhost:27017/notes-app");
mongoose.Promise = global.Promise;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

module.exports = { app };
