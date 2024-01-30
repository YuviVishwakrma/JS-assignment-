const arr = [-2, 5, 3, -8, 10, -4];

function sumOfPositives(arr){     //create a function .
  let sum = 0;                   //declare a sum variable.
  for (const num of arr) {
    if (num > 0) { // if no is greater than 0 then store in sum variable.
      sum += num;
    } else {
    //  "none";
    }
  }
  return sum;
}

console.log(sumOfPositives(arr));
document.write(sumOfPositives(arr));