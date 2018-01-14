var express = require('express');
var router = express.Router();
var mysql = require('../controller/mysql.js')
var searchStudent = require('../controller/search-student')
var addStudent = require('../controller/add-student')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', mysql.get_click);

router.get('/searchStudent', searchStudent.get_click);

router.post('/addStudent', addStudent.get_click)

// router.get('/addStudent', addStudent.get_click);

module.exports = router;