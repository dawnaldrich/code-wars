function capitalize(s){

    let toCapitalize = s.toLowerCase();
   
     let i=0;
     let firstWord = [];
     let secondWord = [];
     let charAdd;

     for(i; i< s.length; i++){
       charAdd = s.charAt(i);
       if (i % 2 === 0) {
         charAdd = charAdd.toUpperCase();
       }
     
      firstWord.push(charAdd);
    }
    let firstW = firstWord.join("");
     
    for(i=0; i< s.length; i++){
      charAdd = s.charAt(i);
      if (i % 2 === 1) {
        charAdd = charAdd.toUpperCase();
      }

      secondWord.push(charAdd);
      
     }
     let secondW = secondWord.join("");
    
     return [firstWord.join(""), secondWord.join("")];
      
   };