function filter_list(l) {
    let filteredL = l.filter(function(n){
      return typeof n === "number";
    });
    return filteredL;
  }