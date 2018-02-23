function solution(str){
    reverseArr = [];
    for(i=str.length; i>-1; i--){
      reverseArr.push(str[i]);
    }
    
    return(reverseArr.join(""));
  }