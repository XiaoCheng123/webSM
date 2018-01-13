var express = require('express');
var router = express.Router();
var mysql = require('../controller/mysql.js')
var searchStudent = require('../controller/search-student')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', mysql.get_click);

router.get('/searchStudent', searchStudent.get_click);

router.get('/addStudent', )

module.exports = router;
