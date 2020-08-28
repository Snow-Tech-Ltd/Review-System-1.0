const mongoose = require('mongoose');

const reviewsSchema = mongoose.Schema({
    review: {
        type: String 
    },
    rating: {
        type: Number
    }
});

const reviews = module.exports = mongoose.model('Reviews', reviewsSchema);

module.exports.addReview = function( newReview, callback ){
    newReview.save(callback);
}