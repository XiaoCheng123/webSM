/**
 * Created by admin on 2018/1/15.
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

  var sql = "update `SC` set " +
  "Grade = '" + grade.Grade + "' where Sno = '" + grade.Sno + "'"

  console.log(sql)

  // console.log(student.Sphone)

  connection.query(sql, function(err, rows, fields) {
    console.log(sql)
    if (err) throw err;
  })
};
