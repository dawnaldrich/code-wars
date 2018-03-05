function capitalize(s,arr){
  strArray = s.split("");
  for(let i in arr){
    if(arr[i] <= strArray.length){
    let x = arr[i];
    let y = strArray[x].toUpperCase(); 
    strArray.splice(x, 1, y);
    }
   }
   strArray = strArray.join("");
   return strArray;
 };