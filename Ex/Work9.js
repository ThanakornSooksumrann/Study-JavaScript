function digitalClock(se){

    // ~~ คือ floor ตัดเศษลง

    //คำนวณโดยใช้วิเป็นตัวกำหนด
    let hrs = ~~(se / 3600);
    let mins = ~~((se % 3600) / 60);
    let secs = ~~se % 60;
    let time = "";
    
    //แสดงผล ชม.
    time += "" + (hrs < 10 ? "0" : "") + "" + (hrs >= 24 ? "00" : hrs);
    //แสดงผล นาที
    time += ":" + (mins < 10 ? "0" : "") + "" + mins;
    //แสดงผล วิ
    time += ":" + (secs < 10 ? "0" : "") + "" + secs;

    return time;
}

console.log (digitalClock(5025));
console.log (digitalClock(61201));
console.log (digitalClock(87000));