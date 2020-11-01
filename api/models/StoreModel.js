var mongoose = require('mongoose');

var storeSchema = mongoose.Schema({
    id: Number,
    item: String,
    price: Number,
    src: String
});

module.exports = mongoose.model('mystore', storeSchema);