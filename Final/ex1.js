let araidee = num =>{
    let b = num.toString()
    let a = b.split('').map(value=>parseInt(value)).reduce((a, b)=>a+b)
    return (b%a == 0)?'true':'false'
}

console.log(araidee(75));
console.log(araidee(171));
console.log(araidee(481));
console.log(araidee(89));
console.log(araidee(516));
console.log(araidee(200));