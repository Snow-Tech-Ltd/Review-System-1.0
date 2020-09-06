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
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 4
    }
    
    Review.find()
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .exec(function (err, doc) {
            if(err) { res.status(500).json(err); return; };
            res.status(200).json(doc);
        });

    // Review.find()
    // .then( reviews => res.json(reviews) )   
});

module.exports = router;
