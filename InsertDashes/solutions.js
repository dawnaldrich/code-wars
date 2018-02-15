function insertDash(numOdd) {
    //code me
    let str = numOdd.toString();
    let arrFirst = str.split('');
    let arrFinal = [];
     let next = 1;
    for(i=0; i < arrFirst.length; i++){
    
       if(i>=arrFirst.length-1){
        break;
       }
       
      
       let num1 = arrFirst[i]; 
       let num2 = arrFirst[i+1]; 
       let y = num1 % 2;
       let x = num2 % 2;
 
       if(next == 1){
       arrFinal.push(num1);
       }
        if(x==1 && y==1){
       
          arrFinal.push('-');
             }
       arrFinal.push(num2);
      
       next++;
       }
    
    return arrFinal.join("");
 }
 
