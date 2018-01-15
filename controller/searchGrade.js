/**
 * Created by admin on 2018/1/14.
 */
/**
 * Created by admin on 2018/1/12.
 */
/**
 * Created by admin on 2018/1/9.
 */
var database = require('./database.js')
exports.get_click = function(req, res) {
  var connection = database.getConnection();
  var sql = "select * from student_sc"
  var data = {};

  connection.query(sql, function(err, rows, fields) {
    if(err) throw err;

    for(let i = 0; i < rows.length; i++) {
      data[i] = {
        Sno: rows[i].Sno,
        Sname: rows[i].Sname,
        Grade: rows[i].Grade,
        Cno: rows[i].Cno,
        Ccredit: rows[i].Ccredit,
        Cname: rows[i].Cname,
        Tname: rows[i].Tname
      }
    }
    var result = {
      genus: req.query.genus,
      evt: req.query.evt,
      data: data
    }

    return res.json(result);
  });
};