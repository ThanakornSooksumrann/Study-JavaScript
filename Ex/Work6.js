function removeDups2(Array){
    return [...new Set(Array)];//(Set ถือเป็นออบเจคชนิดหนึ่งใน JavaScript) เราจึงทำการสร้างอาร์เรย์จาก Set ด้วยคำสั่ง
    //[...Set]
    // ... คือ spread syntax ที่จะทำการคืนค่า element ทุกๆ ตัว 
    // หลังจากนั้นก็ทำให้เป็น array ซะด้วยการครอบ [] เข้าไปก่อน return
}