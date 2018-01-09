var express = require('express');
var router = express.Router();
var msyql = require('../controller/database.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
