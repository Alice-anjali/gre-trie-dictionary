function search_word(trie,word){
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

function get_all_words(prefix,trie){
  var words = {};
  if('_end_' in trie){
    words[prefix] = trie['_meaning_'];
  }
  for(key in trie) {
    if(key != '_end_' && key != '_meaning_') {
      var newwords = get_all_words(prefix+key,trie[key]);
      for(key in newwords){
        words[key] = newwords[key]
      }
    }
  }
  return words;
}

function search_prefix_words(trie,prefix) {
  var curr = trie;
  var words = [];
  for(var i = 0; i < prefix.length; i++) {
    var letter = prefix[i];
    if(letter in curr) {
      curr = curr[letter];
    }else{
      return words;
    }
  }
  return get_all_words(prefix,curr);
}
