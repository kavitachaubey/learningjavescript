let bhavesh = {
    name:"Bhavesh",
    age:24
}
let kavita = {
    name:"Kavita",
    age:19
}
let himani = {
    name:"Himani",
    age:15
}
function canVote(person){
    if(person.age>18){
        return `${person.name} can vote...`
    }
    return `${person.name} can't vote...`
}

console.log(canVote(bhavesh));
console.log(canVote(kavita));
console.log(canVote(himani));