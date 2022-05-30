var express = require('express');
var router = express.Router();
// var User = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cart', function(req, res, next) {
  let cart = req.cookies.cart;
  if(!cart) cart = [];
  res.render('cart', { cart });
});

// router.get("/register", function(req, res, next) {
//   console.log("register render");
//   res.render("users/register");
// });

// router.post("/register", async function(req, res, next) {
//   console.log("register redirect");
//   let user = new User(req.body);
//   await user.save();
//   res.redirect("/");
// });

// router.get("/login", function(req, res, next) {
//   console.log("register render");
//   res.render("users/login");
// });

// router.post("/login", async function(req, res, next) {
//   let user = await User.findOne({
//     email:req.body.email, password:req.body.password
//   })
//   if(!user) return res.redirect("/login");
//   req.session.user = user;
//   res.render("users/login");
// });

module.exports = router;
