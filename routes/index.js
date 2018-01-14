var express = require('express');
var router = express.Router();
var mysql = require('../controller/mysql.js')

var searchStudent = require('../controller/search-student')
var addStudent = require('../controller/add-student')
var deleteStudent = require('../controller/delete-student')
var reviseStudent = require('../controller/revise-student')

var searchGrade = require('../controller/searchGrade')
var addGrade = require('../controller/add-grade')
var deleteGrade = require('../controller/delete-grade')
var reviseGrade = require('../controller/revise-grade')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', mysql.get_click)
router.get('/searchStudent', searchStudent.get_click)
router.post('/addStudent', addStudent.get_click)
router.post('/deleteStudent', deleteStudent.get_click)
router.post('/reviseStudent', reviseStudent.get_click)

// router.get('/addStudent', addStudent.get_click);

router.get('/searchGrade', searchGrade.get_click)
router.post('/addGrade', addGrade.get_click)
router.post('/deleteGrade', deleteGrade.get_click)
router.post('/reviseGrade', reviseGrade.get_click)

module.exports = router;