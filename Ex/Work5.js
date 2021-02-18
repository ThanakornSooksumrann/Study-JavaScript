function getBudgets(budg){
    let sumBudg = 0;
    for (let i = 0;i < budg.length;i++){
        sumBudg += budg[i].budget;
    }
    return sumBudg;
}

console.log (getBudgets([
    { naem: "John", age: "21", budget: 23000 },
    { naem: "Steve", age: "32", budget: 40000 },
    { naem: "Martin", age: "16", budget: 2700 }
]));

console.log (getBudgets([
    { naem: "John", age: "21", budget: 29000 },
    { naem: "Steve", age: "32", budget: 32000 },
    { naem: "Martin", age: "16", budget: 1600 }
]));