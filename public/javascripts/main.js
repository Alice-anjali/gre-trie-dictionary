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
