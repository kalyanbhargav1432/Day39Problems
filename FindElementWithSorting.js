let array = [];
let i;
for(i = 0; i < 10; i++){
    let value = Math.floor(Math.random() * (900) + 100);
    array[i] = value;
}
console.log("Array of 10 random numbers is : " +array);
console.log("Array after sorting : " + array.sort());
console.log("Second Maximum number is : " + array[8]);
console.log("Second minimum number is : " +array[1]);