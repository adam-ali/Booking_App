var _ = require('underscore');
var express = require('express');
var Developer = require('../../models/floors');
var developersRouter = express.Router();

developersRouter.route('/')
    .get(function (req, res, next) {
        Developer.find({}, function(err,doc){
            return res.status(200).json(doc);
        });
    })
    .post(function (req, res, next) {
        var newDev = req.body;
        var newDevDoc = new Developer(newDev);
        newDevDoc.save(function(err, doc){
            if (err){
                next(new Error());
            }
            return res.status(201).json(doc);
        });
    });

module.exports = developersRouter;