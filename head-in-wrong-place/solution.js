function fixTheMeerkat(arr) {
    //your code here;
    let arrAnimal = [];
    for (let i in arr){
      
      arrAnimal.unshift(arr[i]);
      if(arrAnimal.length === 3){
        break;
      }
      
      
      
    }
    return arrAnimal;
   }