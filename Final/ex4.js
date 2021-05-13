function a(num){
    if(num.toString().length > 2){
        let sum = 0;
        let x = [...num.toString()].reverse().map(value=>parseInt(value)).reduce((a,b,i)=> a+(a*(10**i)%13));// i คือนับเริ่มจาก 0
        x.forEach((value,index)=>{
            sum += value * ((10 ** index) % 13);
        })
        return a(sum);
    }
    return num;
}
console.log(a(1234567));