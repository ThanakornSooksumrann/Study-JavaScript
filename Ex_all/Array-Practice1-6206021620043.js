let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];
str = "";

function check_values(values1, values2){
    var str = "";
    for (let index = 0 ; index < values1.length ; index++){
        if (typeof values1[index] == typeof values2[index]){
            str += "True ";
        }
        else str += "False ";
    }
    return str;
}

console.log("-----CHECKING DATA TYPE IN ARRAY-----\n");
str = check_values(values1, values2);
console.log("values1 == values2 : ",str,"\n");

str = check_values(values2, values3);
console.log("values2 == values3 : ",str,"\n");

str = check_values(values3, values1);
console.log("values3 == values1 : ",str,"\n");
console.log("-------------------------------------\n");