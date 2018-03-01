function high(x){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let highArray = x.split(" ");
  let addScore;
  let highScore = 0;
  let highWord = "";
  for(let w in highArray){ // loop through words
    addScore = 0;
    let score = getWordScore(highArray[w]);
    if (score > highScore){
      highScore = score;
      highWord = highArray[w];
    }

  }

  return highWord;
  
  function getWordScore(w){
  
    for(let i=0; i<w.length; i++){
      for(let a=0; a < 26; a++){
        if(w.charAt(i) === alphabet.charAt(a)){
      //    console.log(w.charAt(i) + " " + alphabet.charAt(a) + " " + a);
          addScore += a+1;
        }
      }
    }
    
        return addScore;
      
  }

}