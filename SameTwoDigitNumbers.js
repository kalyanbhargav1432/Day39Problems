let DoubleDigit = new Array();
for(let i = 0; i <= 100; i ++){
    if(i % 11 == 0){
        DoubleDigit.push(i);
    }
}
console.log("Double digit numbers are : "+DoubleDigit);