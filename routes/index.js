var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '@geoffrey\'s Steem Seed Node' });
});

/* GET steemit-estimator. */
router.get('/steemit-estimator', function(req, res, next) {
    //res.redirect('http://steemit-estimator.herokuapp.com');
    res.writeHead(301,
      {Location: 'http://steemit-estimator.herokuapp.com'}
    );
    res.end();
});

module.exports = router;
