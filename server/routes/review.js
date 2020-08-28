const express = require('express');
const router = express.Router();

const Review = require('../models/Reviews');

// Review
router.post('/', (req, res, next) => {
    let newReview = new Review({
        review: req.body.review,
        rating: req.body.rating
    });

    Review.addReview(newReview, (err, review) => {
        if(err){
            res.json({ sucess: false, msg: "Failed to add review"});
        }
        else {
            res.json({ sucess: true, msg: "Sucess" });
        }
    });
});


router.get('/display', (req, res) => {
    Review.find()
    .then( reviews => res.json(reviews) )   
});

module.exports = router;
