const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
})

// bad url path redirect to homepage
router.get('*', (req,res) => {
    res.render('homepage');
})

module.exports = router;