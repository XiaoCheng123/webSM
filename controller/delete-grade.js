/**
 * Created by admin on 2018/1/15.
 */
/**
 * Created by admin on 2018/1/14.
 */
var database = require('./database.js')
exports.get_click = function(req, res) {

  console.log(req)

  var connection = database.getConnection();
  var grade = {
    Sno: req.body.Sno || "",
    Cno: req.body.Cno || "",
    Grade: req.body.Grade || ""
  }
  var sql = "delete from `sc` where Sno = '" + grade.Sno + "' and Cno = '" + grade.Cno + "'"

  // var sql = "INSERT INTO `student` (`Sno`, `Sname`, `Ssex`, `Sbirth`, `Sid`, `Spolitic`, `Scome`, `Sminzu`, `Sjiguan`, `Sdistrist`, `Sphone`) VALUES ('12346456', '13', '1', '1997-09-05','','', '2015-09-05','' ,'' ,'' ,'' );"

  console.log(sql)

  // console.log(student.Sphone)

  connection.query(sql, function(err, rows, fields) {
    console.log(sql)
    if (err) throw err;
  })
};