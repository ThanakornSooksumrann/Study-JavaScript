let a = (num1,num2) =>{
    let a = parseInt(num1);
    let b = parseInt(num2);
    if(num1 === '' && num2 === '') return 'null';
    if(num1 === '') return num2
    if(num2 === '') return num1
    if(!(a > 0)) return '-1';
    if(!(b > 0)) return '-1';
    let c = a+b
    return c.toString();
}

console.log(a('dfgf','3'));
console.log(a('2','3'));
console.log(a('','3'));
console.log(a('',''));