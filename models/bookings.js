var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
    name: String,
    floor: String,
    date: String,
    time: String,
    room: String
});
module.exports = mongoose.model('bookings', BookingSchema);
