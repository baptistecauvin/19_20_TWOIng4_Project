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

/*mongoose.Promise = global.Promise;
const dbName = "DashboardProject";
const dbURL = `mongodb://localhost:27017/${dbName}`;

// Connecting to the database
mongoose.connect(dbURL, {
	userNewUrlParser: true
});*/

//var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/user', userRouter);

module.exports = app;
