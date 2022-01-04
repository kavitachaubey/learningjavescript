function isValidPassword(password,username){
    if(password.length >=8){
        return true;
    }
    if(password.indexOf(' ') !== -1){          //if space in the password reture false
        return false;
    }
    if(password.indexOf(username) !== -1){
        return false;
    }
    return true;
}
console.log(isValidPassword('hello','hello'))