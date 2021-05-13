//เปลี่ยนค่าในตัวแปล array
function str(num){
    return num.map(a=>a+5);
}

console.log(str(['1', '2', '3']));

//เปลี่ยนข้อความเป็น string และทำการแยกเป็น array
function to(str){
    let a = str.toString();
    let b = a.split('').map(v=>parseInt(v));//<--จะให้มันแบ่ง array จากอะไรเช่น จาก '', ' ', 'a'
    return b;
}

console.log(to(1234));

//เรียงจากน้อยไปหามาก a-b แต่ ถ้า b-a คือจากมากไปหาน้อย
function li(num){
    let a = num.sort((a, b)=>b-a);
    return a;
}

console.log(li([5, 2, 7, 4]));

//กลับค่าใน array เช่น [1, 4, 0, 5] ก็จะเป็น [5, 0, 4, 1]
function k(num){
    return num.reverse();
}

console.log(k([1, 4, 0, 5]));
