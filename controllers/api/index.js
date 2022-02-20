const router = require('express').Router();

const tvRoutes = require('./tv-routes');
const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes');

router.use('/tv', tvRoutes);
router.use('/review', reviewRoutes);
router.use('/user', userRoutes);

module.exports = router;