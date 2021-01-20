function equation(text){
    total = 0;
    for( i = 0 ; i < text.length; i++){  
        if(i == 0){
            total = parseInt(text[i]);  
        }
        if(text[i] == "+"){
            i++;  
            num = parseInt(text[i]); 
            total += num;  
        }
        if(text[i] == "-"){
            i++;  
            num = parseInt(text[i]);  
            total -= num;  
        }   
        if(text[i] == "*"){
            i++;    
            num = parseInt(text[i]);  
            total *= num;   
        }
    }
    return total;
}

console.log(equation("2*2+1-3"));