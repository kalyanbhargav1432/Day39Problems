let dice = 0 
let count = 0;
let DiceMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
let checkLoop = true;
while(checkLoop){
    dice = Math.floor( (Math.random() * 6) + 1 );
    switch(dice){
        case 1:
            count = DiceMap.get(1);
            count++;
            DiceMap.set(1,count);
            break;
        case 2:
            count = DiceMap.get(2);
            count++;
            DiceMap.set(2,count);
            break;
        case 3:
            count = DiceMap.get(3);
            count++;
            DiceMap.set(3,count);
            break;
        case 4:
            count = DiceMap.get(4);
            count++;
            DiceMap.set(4,count);
            break;
        case 5:
            count = DiceMap.get(5);
            count++;
            DiceMap.set(5,count);
            break;
        case 6:
            count = DiceMap.get(6);
            count++;
            DiceMap.set(6,count);
            break;
            
    } 
    
    for ( let [key,value] of DiceMap){
        if(value == 10){
            console.log(key + " reaches 10 times");
            checkLoop = false;
        }
        let minimum = Math.min(...DiceMap.values());
        if(value == minimum){
            console.log(key + " comes " + minimum + " times");
        } 
    }
}