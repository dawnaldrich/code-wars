function mutateMyStrings(stringOne, stringTwo){
    let array1 = stringOne.split("");
    let array2 = stringTwo.split("");
    let newString = array1.join("") + "\n";
    //let newString = "";
    for(i=0; i < array2.length; i++){
      if(array1[i] !== array2[i]){
        let x = array1.splice(i, 1, array2[i]);
         newString = newString + array1.join("") + "\n";
      }
        
    }
    return newString;
}