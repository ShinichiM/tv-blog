const { Tv, User, Review } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  Tv.findAll({
    attributes: ["brand", "price", "comment", "image_url", "user_id"],
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
      res.render("homepage", {
        loggedIn: req.session.loggedIn,
        serializedQuery,
      });
    })
    .catch((err) => {
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

router.get("/post", (req, res) => {
  res.render("single-post", { loggedIn: req.session.loggedIn });
});

module.exports = router;

// bad url path redirect to homepage
// router.get("*", (req, res) => {
//   res.render("homepage");
// });
