var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var useragent = require('express-useragent');

//mongoose.connect("mongodb://user:user@ds019053.mlab.com:19053/tinyurl");
mongoose.connect("mongodb://user:user@ds053196.mlab.com:53196/tinyurljunzhiwang");

app.use("/public", express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.use(useragent.express());

app.use("/api/v1", restRouter);

app.use("/", indexRouter);

app.use("/:shortUrl", redirectRouter);

app.listen(3000);
