const obj1 = {
    person : 'Thanakorn',
    weight : 60
}

//const obj2 = obj1;//ไม่ได้สร้างใหม่
//const obj2 = Object.assign({},obj1) //สร้างใหม่
const obj2 = {...obj1}; //สร้างใหม่
obj2.weight = 75;
console.log(obj1);
console.log(obj2);