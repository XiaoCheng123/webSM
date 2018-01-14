/**
 * Created by admin on 2018/1/12.
 */
/**
 * Created by admin on 2018/1/9.
 */
var database = require('./database.js')
exports.get_click = function(req, res) {
  var connection = database.getConnection();
  var sql = "select * from student"
  var data = {};

  connection.query(sql, function(err, rows, fields) {
    if(err) throw err;

    for(let i = 0; i < rows.length; i++) {
      data[i] = {
        Sno: rows[i].Sno,
        Sname: rows[i].Sname,
        Ssex: rows[i].Ssex,
        Sbirth: rows[i].Sbirth,
        Sid: rows[i].Sid,
        Spolitic: rows[i].Spolitic,
        Scome: rows[i].Scome,
        Sminzu: rows[i].Sminzu,
        Sjiguan: rows[i].Sjiguan,
        Sdistrist: rows[i].Sdistrist,
        Sphone: rows[i].Sphone
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