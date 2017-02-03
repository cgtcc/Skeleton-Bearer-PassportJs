var express = require('express');
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// curl -v -H "Authorization: Bearer 123456789" http://127.0.0.1:3000/authenticate
// curl -v http://127.0.0.1:3000/authenticate?access_token=123456789
router.get('/authenticate',
  passport.authenticate('bearer', { session: false }),
  function (req, res) {
    res.json({ username: req.user.username, email: req.user.emails[0].value });
  });


module.exports = router;
