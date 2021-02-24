function totalVolume(){
    let sum = 0;
    for(let i = 0;i < arguments.length;i++){
        mul = 1;
        for(let s = 0;s < arguments[i].length;s++){
            mul *= arguments[i][s];
        }
        sum += mul;
    }
    return sum;
}

function totalVolume2(){
    sum = 0;
    i = 0;
    for (let dataCol of arguments){
        mul = 1;
        for (let dataCol of arguments[i]/*Row*/){
            mul *= dataCol;
        }
        i++;
        sum += mul;
    }
    return sum;
}
console.log (totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log (totalVolume2([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log (totalVolume2([1, 1, 1]));
