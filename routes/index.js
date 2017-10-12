var express = require('express');
var router = express.Router();
var fs = require('fs');
var words = JSON.parse(fs.readFileSync('routes/gre-words.json', 'utf8'));
var trie = {};

function add_word(word,meaning) {
  var curr = trie
  for(var i = 0; i < word.length;i++){
    letter = word[i];
    if(letter in curr){
      curr = curr[letter];
    }else{
      curr[letter] = {};
      curr = curr[letter];
    }
  }
  curr['_end_'] = true;
  curr['_meaning_'] = meaning;
}

function search_word(word){
  var curr = trie;
  for(var i = 0; i < word.length; i++) {
    var letter = word[i];
    if(letter in curr){
      curr = curr[letter];
    }else{
      return undefined
    }
  }
  if(curr['_end_']){
    return curr['_meaning_'];
  }else{
    return undefined;
  }
}

for(word in words){
  add_word(word,words[word]);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get_trie',function(req, res, next) {
  res.send(trie);
});

module.exports = router;
