var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
const config = require('./config/database.config');

// Connecting to the database
mongoose.connect(config.url, {
	useNewUrlParser: true
});
const app = express();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var userRouter = require('./routes/user');
var sensorsRouter = require("./routes/sensors");
var sensorRouter = require('./routes/sensor');
var measuresRouter = require("./routes/measures");
var measureRouter = require('./routes/measure');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/user', userRouter);
app.use("/sensors", sensorsRouter);
app.use('/sensor', sensorRouter);
app.use("/measures", measuresRouter);
app.use('/measure', measureRouter);

module.exports = app;
