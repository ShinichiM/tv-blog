const Review = require('../models/Review');

const reviewData = [
    {
        comment: 'Only the gods would have such a beautiful telly',
        tv_id: 1,
        user_id: 1
    },
    {

        comment: 'Best television ever made',
        tv_id: 2,
        user_id: 2
    }
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;