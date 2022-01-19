const petAnimal = {
    petAni: ['cat','dog'],
    legs : 4
}

const wildAnimal = {
    wildAni : ['tiger','lion'],
    legs : 4
}

const animal= {...petAnimal,...wildAnimal}

console.log(animal);

const animalFish = {
    fish : ['gold fish','octopus'],
    ...petAnimal,
    legs : 2
}

console.log(animalFish);

const human = [..."hello",{...animal}]
console.log(human)