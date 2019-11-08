var mongoose = require('mongoose');
var AddressSchema = new mongoose.Schema({
    address: String,
    street_address: String,
    city: String,
    state: String,
    country: String,
    postal_code: String,
    latitude: String,
    longitude: String,
});
module.exports = mongoose.model('address', AddressSchema);