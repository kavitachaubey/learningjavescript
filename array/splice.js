let animals = ["shark","salmon","wheel","bear","lizard","tortoise"];

console.log(animals.splice(1,0,"octopus")); // 1=length;0=delete;""=add;
console.log(animals)

console.log(animals.splice(3,2)); //start from 3= length ; delete 2 ;
console.log(animals)

console.log(animals.splice(3,2,"orca","grizzly"));
console.log(animals)