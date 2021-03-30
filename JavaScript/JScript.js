//==============================================================
//concat ใช่สำหรับรวม array หลาย ๆ ตัวเข้าด้วยกัน
 let alpha = ['a', 'b', 'c'], numeric = [1, 2, 3];

 let alphaNumeric = alpha.concat(numeric);
 console.log (alphaNumeric);//[ 'a', 'b', 'c', 1, 2, 3 ]
//==============================================================
 //copyWithin คัดลอกอาเรย์แล้ววางทับลงในตัวของมันเอง
 let fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.copyWithin(2, 0, 1);//(เลือกตำแหน่งอาเรย์วาง, เริ่มก็อปจากตำแหน่ง, ตัวสุดท้ายที่ก็อปถึง) หรือภาษาอังกฤษ (target, start, end)
 console.log (fruits);//[ 'Banana', 'Orange', 'Banana', 'Orange' ]
//==============================================================
 //entries สร้างอาเรย์อ็อบเจกต์ขึ้นมาจากอาเรย์ธรรมดา obj
 let arr = ['a', 'b', 'c'];
 let eArr = arr.entries();

 console.log (eArr.next().value);
 console.log (eArr.next().value);
 console.log (eArr.next().value);
//==============================================================
 //every ใช้ตรวจสอบว่าที่กำหนดไว้ผ่านเงื่อนไขทั้งหมดหรือไม่ เช่น ตรวจว่าอาเรย์มีค่ามากกว่า 10 ทุกตัวหรือไม่
 function isBigฎEnough(element, index, array) {
     return element >= 10;
 }
 f = [12, 5, 8, 130, 44].every(isBigฎEnough);
 t = [12, 55, 18, 130, 44].every(isBigฎEnough);
 console.log(f);
 console.log(t);
//==============================================================
 //Fill ใช้เปลี่ยนแปลงค่าในอาเรย์
 //Ex1 แปลงทุกค่า
 let animal = ["elephant", "tiger", "cat", "dog"];
 animal.fill("dolphin");
console.log(animal);
 //Ex2 มีจุดเริ่มต้น
 animal = ["elephant", "tiger", "cat", "dog"];
 animal.fill("dolphin",1);
 console.log(animal);
//Ex3 มีจุดสิ้นสุด
animal = ["elephant", "tiger", "cat", "dog"];
animal.fill("dolphin",1,2);
console.log(animal);
//==============================================================
//filter ใช้สร้างอาเรย์จากค่าที่ผ่านเงื่อนไข
let ages = [32, 33, 16, 40];

function checkAge(age){
    return age <= 18;
}
fi = ages.filter(checkAge)
console.log(fi);
//==============================================================
//find ใช้สำหรับค้นหาข้อมูลในอาเรย์โดยใช้เงื่อนไขเป็นฟังก์ชัน
ages = [32, 33, 16, 40];

function checkAge2(age){
    return age >= 18;
}
console.log (ages.find(checkAge2));
//==============================================================
//findIndex ใช้สำหรับค้นหาข้อมูลในอาเรย์โดยใช้เงื่อนไขเป็นฟังก์ชัน โดยจะส่งเป็นลำดับของค่าที่ตรงกลับมาแทน จะส่งตำแหน่งแรกที่มันเจอ 
ages = [32, 33, 16, 40];

function checkAge3(age){
    return age >= 18;
}
console.log(ages.findIndex(checkAge3));
//==============================================================
/*//forEach ใช้สำหรับเรียกใช้ฟังก์ชันเพื่อส่งค่าเป็นสมาชิกในอาเรย์ในครั้งเดียว โดยฟังก์ชัน callback ที่จะใช้งานร่วมนั้นต้องมีรูปแบบดังนี้
//Function callback (value, index, array) value:ค่าของอาเรย์ index:ลำดับของสมาชิกในอาเรย์ array:ค่าที่ต้องการเสริมเข้าไป
let sum = 0;
let numbers = [34, 232, 55, 232, 285];

function formular(item) {
    sum += item;
    return sum;
}
console.table(numbers.forEach(formular));*///ใช้กับ HTML ยังไม่ต้องสนใจ!!!!!

//==============================================================
//from สร้างอาเรย์โดยรับค่าอากิวเมนต์ที่รับเข้ามาเป็นอ็อบเจกต์เช่นset, map,strin
//map สร้างอาเรย์ใหม่โดยดึงข้อมูลในอาเรย์แล้วส่งไปให้ฟังก์ชันแล้วได้ค่าใหม่กลับออกมาโดยไม่ทาให้ค่าเดิมเสียรูป
//นาเอาค่าในอาเรย์มาหารากที่สองโดยที่ค่าของอาเรย์ตัวเดิมไม่เปลี่ยนแปลงหลังจากผ่านฟังก์ชันใหม
let numbers = [4, 16, 9, 25];
let summ = numbers.map(Math.sqrt);
myvar = Array.from(summ);
console.log(myvar);//from
console.log(numbers);//map
//==============================================================
//คำสั่งเคลียTerminal
//console.clear();
//==============================================================
//isArray ตรวจว่าข้อมูลเป็นอาเรย์หรือไม่
let arr2 = [];
Array.isArray(arr2);
//==============================================================
//่join แปลงอาเรย์ให้เป็นประโยคโดยใส่ตัวขั้นให้ด้วยหรือไม่ใส่อะไรเลยก็ได้
//Ex1
let a = ['one', 'teo', 'three'];
let myVar1 = a.join();
console.log(myVar1);
//Ex2
myVar1 = a.join('');
console.log(myVar1);
//Ex3
myVar1 = a.join(':');
console.log(myVar1);
//==============================================================
//Length ค้นหาจานวนสมาชิกของอาเรย์นั้นๆ
let arr3 = [1,2,3,4,5,6,7,8,9]
console.log(arr3.length);
//==============================================================
//includes ตรวจว่ามีค่าที่ต้องการอยู่ในอาเรย์หรือไม
let arr4 = [1,2,3,4,5,6,7,8,9];
let myvar2 = arr4.includes(2);
console.log(myvar2);
//==============================================================
//indexOf ตรวจหาตาแหน่งของคาทีต้องการในอาเรย
arr4 = [1,2,3,4,5,6,7,8,9];
myvar2 = arr4.indexOf(2);
console.log(myvar2);
//==============================================================
//pop ดึงข้้อมูลตัวสุดท้ายออกมาจากอาเรย์และลบในคราวเดียวกัน
let arr5 = [1,2,3,4,5,6,7,8,9];
let myvar3 = arr5.pop();
console.log(myvar3);
//==============================================================
//Push เพิ่มค่าลงไปในอาเรย์โดยเพิ่มจากท้ายสุด
arr5 = [1,2,3,4,5,6,7,8,9];
arr5.push(10);
console.log(arr5);
//==============================================================
//Reverse จัดเรียงลาดับในอาเรย์ใหม่โดยเรียงจากด้านหลังขึ้นมา
arr5 = [1,2,3,4,5,6,7,8,9];
arr5.push();
console.log(arr5);
//==============================================================
//Shift ดึงข้อมูลในลาดับแรกออกจากอาเรย์และใส่เข้าไปในตัวแปร
arr5 = [1,2,3,4,5,6,7,8,9];
arr5.shift();
console.log(arr5);
//==============================================================
//Slice ดึงข้้อมูลออกจากอาเรย์โดยกาหนดจุดเริ่มต้นและสิ้นสุด
arr5 = [1,2,3,4,5,6,7,8,9];
console.log(arr5.slice(1,5));
//==============================================================
//Split แบ่งประโยคเป็นอาเรย์
let tt = "I am grood";
let res = tt.split(" ");//แล้วแต่ว่าจะแบ่งประโยคด้วยอะไรในตัวอย่างแบ่งด้วยช่องว่าง
console.log(res);
//==============================================================
//charAt บอกตำแหน่ง string
tt = "I am grood";
console.log(tt.charAt(2));
//==============================================================