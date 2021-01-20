let furniture = ['Table', 'Chairs', 'Couch'];

function interator(furniture){
    for (let index = 0 ; index < furniture.length ; index++) {
        console.log("-----Interator-----");
        console.log(furniture[index]," : ");
        for (let char of furniture[index]) {
            console.log( char );
          }
          console.log("-------------------");
    }
}

interator(furniture);