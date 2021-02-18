function capToFront(str){
    let strAr = str.split('');
    let up = "";
    let low = "";
    for (let i = 0;i < strAr.length;i++){
        if (strAr[i] == strAr[i].toUpperCase()){
            up += strAr[i];
        }
        else {
            low += strAr[i];
        }
    }
    return (up+low);
}

function capToFront2(str){
    let upper = str.match(/[A-Z]/g);
    let lower = str.match(/[a-z]/g);
    return (upper.join('')+lower.join(''));
}

console.log (capToFront("EaRtH"));
console.log (capToFront2("EaRtH"));