var express = require('express');
var router = express.Router();
var mysql = require('../controller/mysql.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', mysql.get_click);

module.exports = router;
