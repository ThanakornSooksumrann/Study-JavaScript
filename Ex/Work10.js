function isValidIP(ip){
    let point = ip.split('');
    let number = ip.split('.');
    po = 0;

    //เมื่อตำแหน่ง IP เกิน
    for(i = 0;i < point.length;i++){
        if(point[i] == '.'){
            po++;
        }  
    }
    if(po == 4 || po < 3){
        return false;
    }

    //เมื่อเลข IP เกิน 255 หรือน้อยกว่า 0 และ ตำแหน่งสุดท้ายต้องไม่ใช่ 0 
    for(i = 0;i < number.length;i++){
        if(number[i] > 255 || number[i] < 0){
            return false;
        }
        if(isNaN(number[i])){
            return false;
        }
    }
    if(number[3] == 0){
        return false;
    }

    //กันเมื่อมีช่องว่าง
    for(i = 0;i < number.length;i++){
        for(s = 0;s < number[i].length;s++){
            if(number[i].charAt(s) == " "){
                return false;
            }
        }
    }

    //กันเมื่อในตำแหน่งมี 0 นำหน้าเลข IP เช่น 033.233.03.013 
    for(i = 0;i < number.length;i++){
        if(number[i].length > 0){
            if(number[i].charAt(0) == 0 && number[i].charAt(1) >= 0){
                return false;
            }
        }
    }

    //IP ถูกต้อง
    return true;
}

/*console.log (isValidIP("1.2.3.4"));//true
console.log (isValidIP("1.2.3"));//false
console.log (isValidIP("1.2.3.4.5"));//false*/
console.log (isValidIP("123.45.67.89"));//true
//console.log (isValidIP("1.2.3.0"));//false
console.log (isValidIP("1.2.0.4"));//true
console.log (isValidIP("1.2.035.095"));//false
console.log (isValidIP("100.200.300.400"));//false