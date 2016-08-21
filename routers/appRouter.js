var express = require('express');
var _ = require('underscore');
// var developersRouter = require('./apiRouter/developersRouter');
var path = require('path');
var appRouter = express.Router();

appRouter.get('/',function (req,res) {
    res.sendFile(path.resolve('./public/html/index.html'));
});

// appRouter.use('/', developersRouter);
module.exports = appRouter;
