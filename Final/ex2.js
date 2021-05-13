let sort = num =>{
    return num.sort((a, b)=> b-a) //b-a เรียงจากมากไปหาน้อย -- a-b เรียงจากน้อยไปหามาก
}

console.log(sort([5,1,5475,0,15]));