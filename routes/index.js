var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  user : 'b9fae1d4b16ce8',
  password : '64554f71',
  database : 'heroku_92a847566df1eff',
  host : 'us-cdbr-iron-east-02.cleardb.net'
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.post('/submit', function(req, res) {
  console.log('jalann')
  console.log('reqqq'+req)
  res.send(200)
})

module.exports = router;
