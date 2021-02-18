function totalVolume(){//ฟังก์ชั่นเวอร์ชั่นนี้มีปัญหาอย่าพึ่งใช้แค่ทดลองทำดู
    let length = totalVolume.arguments.length;
    sum = 0;
    mul = 1;
    array = [];
    for(let i = 0;i < length;i++){
        array = arguments[i];
        for(let s = 0;s < array.length;s++){
            mul *= array[s];
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
