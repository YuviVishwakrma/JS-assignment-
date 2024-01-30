const number = 8046957321;
const arrayvalue = String(number).split('').map(Number);  
// cnvert the num to string or breakdown the num  into individual digit and cnvrt them into nums.

/*using bubble sort 
and swapping a no */
for (let i = 0; i < arrayvalue.length - 1; i++) {
  for (let j = 0; j < arrayvalue.length - i - 1; j++) {
    if (arrayvalue[j] > arrayvalue[j + 1]) {

      const temp = arrayvalue[j];
      arrayvalue[j] = arrayvalue[j + 1];
      arrayvalue[j + 1] = temp;
    }
  }
}

const sortedNumber = parseInt(arrayvalue.join(''), 10);  // join a sorted array  and cnvert a no
console.log(sortedNumber); // print sorted no.
document.write(sortedNumber);