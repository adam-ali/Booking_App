var express = require('express');
var Booking = require('../../models/bookings');
var developersRouter = express.Router();

developersRouter.route('/')
    .get(function (req, res, next) {
        Booking.find({}, function(err,doc){
            return res.status(200).json(doc);
        });
    })
    .post(function (req, res, next) {
        var newDev = req.body;
        var newDevDoc = new Booking(newDev);
        newDevDoc.save(function(err, doc){
            if (err){
                next(new Error());
            }
            return res.status(201).json(doc);
        });
    })
    .delete(function (req,res,next) {
            Booking.remove({ _id: req.body._id },function (err,doc) {
                return res.status(201).json(doc);
            })
        }
        
    );

module.exports = developersRouter;

