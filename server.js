var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
// var apiRouter = require('./routers/apiRouter.js');
var appRouter = require('./routers/appRouter.js');
var mongoose = require('mongoose');
var path = require('path');

// mongoose.connect('mongodb://localhost:1000/bookingApp');


app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
// app.use('/api',apiRouter);
app.use('/',appRouter);




app.use(errorHandler);
function errorHandler(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('Something broke!!');
}
app.listen(3000);