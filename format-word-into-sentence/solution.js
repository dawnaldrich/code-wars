function formatWords(myArray){
    if (myArray === undefined || myArray === 0) {
        return "";
    }
    
    myArray = myArray.filter(word => word !== null);
    myArray = myArray.filter(word => word !=="");
    
    
      let words = [];
      
      for (let i=0; i < myArray.length; i++){
        if (myArray.length === 1){
          words.push(myArray[i]);
          break;
        }
        else if (myArray.length === 2){
          words.push(myArray[i]);
          words.push(" and ");
          words.push(myArray[i+1]);
          break;
        }
        else if(i < myArray.length-2){
          words.push(myArray[i]);
          words.push(", ");
        }
    
        else if(i < myArray.length-1){
         words.push(myArray[i]);
          words.push(" and ");
          words.push(myArray[i+1]);
      }
      }
      words = words.join("");
      console.log(words);
      return(words);
    
    }