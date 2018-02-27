let odd = function (num) {
    return num % 2;
  };
  
  
  
  function cubeOdd(arr) {
  let newNum = [];
  console.log(arr);
    for(let i=0; i <arr.length; i++){
    let a = arr[i];
   
   
     if((typeof a!== 'number' )){
       return;
     }
     else{
       newNum.push(arr[i]);
        
        console.log(arr[i] + " / " + newNum);
     }
    }
    
    
   
    newNum = newNum.filter(odd);
   
    let arrayPower = newNum.map(x => Math.pow(x, 3));
    const arrSum = arrayPower.reduce((accumulator, currentValue) => accumulator + currentValue);
    
    return arrSum;
  
  }