function getSecondMax(array){
    var max = Math.max.apply(null, array);
    array.splice(array.indexOf(max), 1);
    return Math.max.apply(null, array);
}

function getSecondMin(array){
    var minimum = Math.min.apply(null, array);
    array.splice(array.indexOf(minimum), 1);
    return Math.min.apply(null, array)
}


let array = [];
let i;
for(i = 0; i < 10; i++){
    let value = Math.floor(Math.random() * (900) + 100);
    array[i] = value;
}
console.log("Array of 10 random numbers are : " +array);
console.log("2nd Maximum number is : " +getSecondMax(array));
console.log("2nd Minimum number is : " + getSecondMin(array));