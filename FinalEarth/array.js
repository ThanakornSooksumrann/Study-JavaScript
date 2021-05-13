
let sub = num =>{
    let a = new Array(10);
    for (let i = 0 ; i < a.length ;i++){
        a[i]=i+1;
    }
    console.log(a);
    a.pop();//ออกตัวท้าย
    console.log(a);
    a.push(10);//เข้าตัวท้าย
    console.log(a);
    a.shift();//ออกตัวหน้า
    console.log(a);
    a.unshift(1);//เข้าตัวหน้า
    console.log(a);
}

function plus(num){
    return num.reduce((a, b)=>a+b);//
}

console.log(plus([1, 2, 3, 4]));
console.log(sub());

//ให้สร้างฟังก์ชั่น sub ขึ้นมา รับมาสองตัวแปล รับมาทำให้สองตัวแปลนั้นลบกัน แล้ว return ค่าแสดงผล 