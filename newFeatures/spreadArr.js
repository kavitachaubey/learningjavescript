const octopus = ['dumbo octopus','blacket octopus','typical octopus'];
const catAnimal = ['lion','tiger','leopard','cheeta'];
const omnivores = ['cow','buffalo','goat'];

const combine = [...octopus,...catAnimal];
console.log(combine);

console.log(...omnivores);

const vowels = 'aeiou';
console.log(vowels.split(''))
console.log(...vowels)