var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '@geoffrey\'s Steem Seed Node' });
});

/* GET steemit-estimator. */
router.get('/steemit-estimator', function(req, res, next) {
    res.writeHead(301,
      {Location: 'http://steemit-estimator.herokuapp.com'}
    );
    res.end();
});

/* GET steem-index. */
router.get('/steem-index', function(req, res, next) {
    res.writeHead(301,
      {Location: 'http://seed.zapto.org:5001/'}
    );
    res.end();
});

/* GET steem-index-full. */
router.get('/steem-index/full/:id', function(req, res, next) {
    res.writeHead(301,
      {Location: 'http://seed.zapto.org:5001/full/' + req.params.id}
    );
    res.end();
});


/* GET steem-index-quick. */
router.get('/steem-index/:id', function(req, res, next) {
    res.writeHead(301,
      {Location: 'http://seed.zapto.org:5001/' + req.params.id}
    );
    res.end();
});

/* GET steem-index. */
router.get('/hindex', function(req, res, next) {
    res.writeHead(301,
      {Location: 'http://seed.zapto.org:5001/'}
    );
    res.end();
});

/* GET steem-index-full. */
router.get('/hindex/full/:id', function(req, res, next) {
    res.writeHead(301,
      {Location: 'http://seed.zapto.org:5001/full/' + req.params.id}
    );
    res.end();
});

/* GET steem-index-quick. */
router.get('/hindex/:id', function(req, res, next) {
    res.writeHead(301,
      {Location: 'http://seed.zapto.org:5001/' + req.params.id}
    );
    res.end();
});


/* Get account. */
router.get('/:name', function(req, res, next) {
    res.redirect('http://seed.zapto.org:5000/' + req.params.name);
    res.end();

});

module.exports = router;
