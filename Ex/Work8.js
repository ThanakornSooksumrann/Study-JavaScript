function simplePair(arr,n){
    for(i = 0;i < arr.length;i++){
        for(s = 0;s < arr.length;s++){
            if(i != s){
                if(arr[i]*arr[s] == n){
                    return [ arr[i],arr[s]]
                }
            }
        }
    }
    return null;
}

console.log (simplePair([1, 2, 3], 3));
console.log (simplePair([1, 2, 3], 6));
console.log (simplePair([1, 2, 3], 9));