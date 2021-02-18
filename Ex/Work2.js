function highestDigit(number) {
    let numberArray = number.toString().split('');
    sum = 0;
    for(let i = 0;i < numberArray.length;i++) {
        sum = numberArray[i];
        if(numberArray[i] > sum){
            sum = numberArray[i];
        }
    }
    return sum;
}

function highestDigit2(number) {
    let numberArray = number.toString().split('');
    return Math.max(...numberArray);
}

console.log (highestDigit(12345));
console.log (highestDigit2(123456));