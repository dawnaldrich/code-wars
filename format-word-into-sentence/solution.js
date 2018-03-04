function formatWords(words){
    if (words === undefined || words === 0 || !words) {
      return "";
  }
  words = words.filter(Boolean);
  
  if(words.length > 2){
    let last = words.pop();
    return words.join(', ') + ' and ' + last;
  }
 
  else if(words.length === 2){
    return words.join(' and ');
  }
  
   else {return words.join('')};
}