
function isNice(arr){
  
  let subminus = arr.length;
     let j = subminus;
     let newNice = false;
     let nice = false;
     arr.forEach(function (element) {
     
      // if (newNice){
      //   nice = true;
      // }
         let num=element;
        // console.log(j);
       // let nice = false;
         for(i=0; i<j; i++){
          
            if(element+1===arr[i] || element-1===arr[i])
            {
             
              nice = true;
              break;
             
              
            }
            else{
              nice=false;
             // console.log(nice);
            }
          
        
          
            
         }
         if(nice==false){
           console.log('not nice');
           return false;
         }
      //   console.log(nice);
      //    return 'is nice';
        
         j--;
        
     })
    
if(nice){
     return true;
     }
     else return false;
    
   //  console.log(nice);
    // isNice([2,10,9,3]);
 }
