function isPurple(color){
    if(color.toLowerCase()==="purple"){
        return true;
    }
    return false;
}
console.log(isPurple("black"));


function isPurple(color){
    return color.toLowerCase()==="purple";
}
console.log(isPurple("PURPLE"));

function arrOfColor(arr){
    for(let color of arr){
        if(color=== "purple" || color === "pink"){
            return true;
        }
    }
    return false;
}
console.log(arrOfColor(["yellow","blue","pink"]))