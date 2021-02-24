function sumTwoSmallestNums(arr){
    let sumFr = arr[0] + arr[1];
    let sumSc = sumFr;
    for(i = 0;i < arr.length;i++){
        for(s = 0;s < arr.length;s++){
            if(arr[i] < 0){
                break;
            }
            if(arr[s] >= 0){
                if(i != s){
                    sumFr = arr[i] + arr[s];
                }
                if(sumFr <= sumSc){
                    sumSc = sumFr;
                }
            }
        }
    }
    return sumSc;
}

console.log (sumTwoSmallestNums([19, 5, 52, 2, 77]));
console.log (sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
console.log (sumTwoSmallestNums([2, 9, 6, -1]));