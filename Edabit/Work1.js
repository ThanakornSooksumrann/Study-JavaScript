function findAllDigits(nums) {
    let found = new Set();
    for (let n of nums){
      for (let i of ''+n){
        if(found.add(i).size === 10){
          return n;
        }
      }
    }
    return "Mising digit!";
  }
  
  console.log (findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]));
  console.log (findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]));
  console.log (findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]));