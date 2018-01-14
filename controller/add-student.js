/**
 * Created by admin on 2018/1/12.
 */
var database = require('./database.js')
exports.get_click = function(req, res) {

  var connection = database.getConnection();
  var student = {
    Sno: req.body.Sno || "",
    Sname: req.body.Sname || "",
    Ssex: req.body.Ssex || "",
    Sbirth: req.body.Sbirth.substring(0,10) || "",
    Sid: req.body.Sid || "",
    Spolitic: req.body.Spolitic || "",
    Scome: req.body.Scome.substring(0,10)  || "",
    Sminzu: req.body.Sminzu || "",
    Sjiguan: req.body.Sjiguan || "",
    Sdistrist: req.body.Sdistrist || "",
    Sphone: req.body.Sphone || ""
  }
  var sql = "INSERT INTO `student` (`Sno`, `Sname`, `Ssex`, `Sbirth`, `Sid`, `Spolitic`, `Scome`, `Sminzu`, `Sjiguan`, `Sdistrist`, `Sphone`) VALUES" +
  "('" + student.Sno + "','" + student.Sname + "','"
    + student.Ssex + "','" + student.Sbirth + "','" + student.Sid + "','" + student.Spolitic + "','" + student.Scome + "','" + student.Sminzu + "','"
    + student.Sjiguan + "','" + student.Sdistrist + "','" + student.Sphone + "')"

  // var sql = "INSERT INTO `student` (`Sno`, `Sname`, `Ssex`, `Sbirth`, `Sid`, `Spolitic`, `Scome`, `Sminzu`, `Sjiguan`, `Sdistrist`, `Sphone`) VALUES ('12346456', '13', '1', '1997-09-05','','', '2015-09-05','' ,'' ,'' ,'' );"

  console.log(sql)

  // console.log(student.Sphone)

  connection.query(sql, function(err, rows, fields) {
    console.log(sql)
    if (err) throw err;
  })
};
