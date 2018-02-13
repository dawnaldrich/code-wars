function abbrevName(name){

    // code away
    name = name.split(" ");
    let first = name[0].substring(0,1).toUpperCase();
    let last = name[1].substring(0,1).toUpperCase();
    let fullName = `${first}.${last}`;
    return fullName;

}