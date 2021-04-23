function sortArray(arr){
    let arrCp = arr, res = [], min, index;
    while(arrCp.length > 0) {
        min = Math.min(...arrCp);
        res.push(min);
        index = arrCp.indexOf(min);
        arrCp = arrCp.slice(0, index).concat(arrCp.slice(index+1));
    }
    return res;
}

console.log (sortArray([2, -5, 1, 4, 7, 8]))
console.log (sortArray([23, 15, 34, 17, -28]))
console.log (sortArray([38, 57, 45, 18, 47, 39]))