var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Floor = new Schema({
    floor: String,
    rooms: Array
});

module.exports = mongoose.model('floors', Floor);
