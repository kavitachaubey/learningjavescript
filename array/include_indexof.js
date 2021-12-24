let ingredient = ['water',"cheese","bread","cauliflower","flour medda","atta","rice"];

console.log(ingredient.includes("cheese"));
console.log(ingredient.includes("toffee"));
console.log(ingredient.includes("flour"));
console.log(ingredient.includes("atta", 3)); //3 will start searching atta from 3 to the length ,ignore the no. before 3. 
if(ingredient.includes("water")){
    console.log("Hello I'm kavita")
};


console.log(ingredient.indexOf("water"));
console.log(ingredient.indexOf("atta"));
console.log(ingredient.indexOf("beer"));