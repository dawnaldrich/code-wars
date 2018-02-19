function validatePIN (pin) {
    //return true or false
     return /^([0-9]{4}|[0-9]{6})$/.test(pin); 
  }