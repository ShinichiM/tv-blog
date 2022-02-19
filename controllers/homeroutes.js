const { Tv, User, Review } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  Tv.findAll({
    attributes: ["brand", "price", "image_url", "user_id"],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ],
  })
    .then((query) => {
      console.log(User.username)
      const serializedQuery = query.map((query) => query.get({ plain: true }));
      console.log(
        "-------------------------------------",
        serializedQuery,
        "-------------------------------------"
      );
      res.render("homepage", {
        loggedIn: req.session.loggedIn,
        serializedQuery,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/tv", (req, res) => {
  Tv.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["brand", "price", "user_id"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbTvData) => {
      const tvs = dbTvData.map((tv) => tv.get({ plain: true }));
      res.render("TVdump", { tvs, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Router Login
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/post/:id", (req, res) => {
  res.render("single-post");
});

module.exports = router;

// bad url path redirect to homepage
// router.get("*", (req, res) => {
//   res.render("homepage");
// });
