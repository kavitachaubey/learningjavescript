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
console.log(isValidPassword('kav ita','hello'))

//................................................//

function isValidPassword(password,username){
    const tooShort = password.length >=8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    if(tooShort || hasSpace || tooSimilar) return false;
    return true;

}
console.log(isValidPassword('kavita','hello'))