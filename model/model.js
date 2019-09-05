//model.js

var mongoose = require('mongoose');

//Setup Schema

var realestate = mongoose.Schema({
    agent:{
        type: String,
        default: 'Rahul Raj',
        require: true
    },
    title:{
        type: String,
        require: true
    },
    address:String,
    city:String,
    state:String,
    zip:{
        type: String,
        require: true
    },
    description:String,
    price:Number,
    bedroom:Number,
    bathroom:Number,
    garage: Number,
    lotsize:String,
    pmain:{
        type: String,
        require: true
    },
    // photo1: String,
    // photo2: String,
    // photo2: String,
    // photo4: String,
    // photo5: String,
    // photo6: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
var Contact = module.exports = mongoose.model('contact', realestate);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}