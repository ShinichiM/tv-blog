const router = require('express').Router();

const tvRoutes = require('./tv-routes');

router.use('/tv', tvRoutes);

module.exports = router;