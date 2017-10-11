var express = require('express');
var router = express.Router();

var fs = require('fs')
var words = JSON.parse(fs.readFileSync('gre-words.json', 'utf8'))

console.log(words);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
