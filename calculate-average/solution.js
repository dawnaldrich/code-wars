function find_average(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let num = array.reduce(reducer)/array.length;
    return num;;
  }