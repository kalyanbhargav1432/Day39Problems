function getPrimeFactors(number){
    let primeValue = 0;
    let i,j;
    let count = 0, array = [];
    for(i = 2; i <= number; i++)
    {
        if(number % i == 0)			
        {
            primeValue = 1;
            for(j = 2; j <= (i / 2); j++)		
            {
                if((i % j) == 0)		
                    primeValue = 0;
            }
            if(primeValue == 1)
            {
                array[count++] = i;
            }
        }
    }
    return array;
}

const prompt = require("prompt-sync")();
const number = prompt('Enter number: ');
console.log("Prime factors of " + number + " are " + getPrimeFactors(number));