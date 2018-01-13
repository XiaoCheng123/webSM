var express = require('express');
var router = express.Router();
var mysql = require('../controller/mysql.js')
var searchStudent = require('../controller/search-student')
// var addStudent = require('../controller/add-student')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', mysql.get_click);

router.get('/searchStudent', searchStudent.get_click);

router.post('/addStudent',function (req, res) {
  // 打印post请求的数据内容
  console.log(req.body);
  res.send({status: 200});
});

// router.get('/addStudent', addStudent.get_click);

module.exports = router;