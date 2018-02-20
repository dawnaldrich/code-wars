
function isNice(arr){
  
    let subminus = arr.length;
       let j = subminus;
       let nice = false;
       arr.forEach(function (element) {
           let num=element;
          // console.log(j);
         // let nice = false;
           for(i=1; i<j; i++){
            
              if(element+1===arr[i] || element-1===arr[i])
              {
                console.log('is true');
                nice = true;
               
              }
           if(nice){
            break;
           }
            
              
           }
           console.log(nice);
          return nice;

        //    console.log('is nice');
        //    return 'is nice';
          
           j--;
          
       })
   
      // isNice([2,10,9,3]);
   }
   isNice([2,10,9,3]);
   // isNice([3,4,5,7]);