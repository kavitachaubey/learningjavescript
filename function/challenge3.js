function isPangram(sentance){
    let lowerCase = sentance.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(lowerCase.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}
console.log(isPangram('the five boxing wizardS JUMP quickly'));
console.log(isPangram('the five boxing wizards jump quick'));