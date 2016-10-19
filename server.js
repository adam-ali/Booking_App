var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var apiRouter = require('./routers/apiRouter.js');
var appRouter = require('./routers/appRouter.js');
var mongoose = require('mongoose');
var path = require('path');

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync(path.join(__dirname,'ssl','server.key')),
    cert: fs.readFileSync(path.join(__dirname,'ssl','server.crt'))
};

mongoose.connect('mongodb://localhost:27017/booking', function(err, db) {
    if(!err) {
        console.log("connected to the Database");
    }
});
app.use(express.static(__dirname+'/public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api',apiRouter);
app.use('/',appRouter);

app.use(errorHandler);
function errorHandler(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('Something broke!!');
}


https.createServer(options, app).listen(3001);

// app.listen(3001);

