//concat ใช่สำหรับรวม array หลาย ๆ ตัวเข้าด้วยกัน
 let alpha = ['a', 'b', 'c'], numeric = [1, 2, 3];

 let alphaNumeric = alpha.concat(numeric);
 console.log (alphaNumeric);

 //copyWithin คัดลอกอาเรย์แล้ววางทับลงในตัวของมันเอง
 let fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.copyWithin(2, 0);
 console.log (fruits);//[ 'Banana', 'Orange', 'Banana', 'Orange' ]

 //entries สร้างอาเรย์อ็อบเจกต์ขึ้นมาจากอาเรย์ธรรมดา obj
 let arr = ['a', 'b', 'c'];
 let eArr = arr.entries();

 console.log (eArr.next().value);
 console.log (eArr.next().value);
 console.log (eArr.next().value);

 //every ใช้ตรวจสอบว่าที่กำหนดไว้ผ่านเงื่อนไขทั้งหมดหรือไม่ เช่น ตรวจว่าอาเรย์มีค่ามากกว่า 10 ทุกตัวหรือไม่
 function isBigฎEnough(element, index, array) {
     return element >= 10;
 }
 f = [12, 5, 8, 130, 44].every(isBigฎEnough);
 t = [12, 55, 18, 130, 44].every(isBigฎEnough);
 console.table(f);
 console.table(t);

 //Fill ใช้เปลี่ยนแปลงค่าในอาเรย์
 //Ex1 แปลงทุกค่า
 let animal = ["elephant", "tiger", "cat", "dog"];
 animal.fill("dolphin");
console.table(animal);
 //Ex2 มีจุดเริ่มต้น
 animal = ["elephant", "tiger", "cat", "dog"];
 animal.fill("dolphin",1);
 console.table(animal);
//Ex3 มีจุดสิ้นสุด
animal = ["elephant", "tiger", "cat", "dog"];
animal.fill("dolphin",1,2);
console.table(animal);

//filter ใช้สร้างอาเรย์จากค่าที่ผ่านเงื่อนไข
let ages = [32, 33, 16, 40];

function checkAge(age){
    return age <= 18;
}
fi = ages.filter(checkAge)
console.table(fi);

//find ใช้สำหรับค้นหาข้อมูลในอาเรย์โดยใช้เงื่อนไขเป็นฟังก์ชัน
ages = [32, 33, 16, 40];

function checkAge2(age){
    return age >= 18;
}
console.log (ages.find(checkAge2));

//findIndex ใช้สำหรับค้นหาข้อมูลในอาเรย์โดยใช้เงื่อนไขเป็นฟังก์ชัน โดยจะส่งเป็นลำดับของค่าที่ตรงกลับมาแทน
ages = [32, 33, 16, 40];

function checkAge3(age){
    return age >= 18;
}
console.table(ages.findIndex(checkAge3));
