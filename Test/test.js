function isValidIP(str) {
    test = str.split(".");
    if (test.length == 4) {
      for (i = 0; i < test.length; i++) {
        if (test[i] < 1 || test[i] > 255) return false;
  
        for (a = 0; a < test[i].length; a++) {
          if (test[i].charAt(a) == " ") return false;
        }
        
        if (test[i].charAt(0) == 0) return false;
  
        if (isNaN(test[i])) return false;
  
        if (i == 3) {
          for (a = 0; a < test[i].length; a++) {
            if (test[i].charAt(a) == 0) return false;
          }
        }
      }
      return true;
    }else{
        return false
    }
}

console.log (isValidIP("123.45.67.89"));//true
//console.log (isValidIP("1.2.3.0"));//false
console.log (isValidIP("1.2.0.4"));//true
console.log (isValidIP("1.2.035.095"));//false
console.log (isValidIP("100.200.300.400"));//false