const router = require("express").Router();
const { Tv, User, Review } = require("../../models");

router.get("/", (req, res) => {
    Tv.findAll({
        attributes: ["id", "brand", "price", "comment", "image_url", "user_id"],
    }).then((dbTvData) => {
        if (dbTvData) {
            res.json(dbTvData);
        } else
            (err) => {
                res.status(500).json(err);
            };
    });
});

router.post("/", (req, res) => {
    //creating a new Tv
    Tv.create({
        brand: req.body.brand,
        price: req.body.price,
        comment: req.body.comment,
        image_url: req.body.url,
        user_id: req.session.user_id
    })
        .then((dbTvData) => {
            res.json(dbTvData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// TODO uncomment this section and try to split into multipel commits
router.get("/tv/:id", (req, params) => {
    Tv.findOne({
        where: {
            id: req.params.id,
        },
    })
        .then((tvData) => {
            if (!tvData) {
                res.status(400).json({ message: "No Tv found with this id" });
                return;
            }
            const tv = tvData.get({ plain: true });
            res.render("single-tv", { tvData });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// UPDATE tv by id '/:id', router.put('/:id', (req, params) => {  })

// DELETE tv by id '/:id', router.delete(':/id', (req, params) => {  })

module.exports = router;
