const mongoose = require('mongoose');

const placesSchema = mongoose.Schema({
    title: String,
    lat: String,
    lng: String,
    disable: Boolean
  },{
    timestamps  : true
  });
module.exports = mongoose.model('places', placesSchema);
