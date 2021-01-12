//call error test funcitons : not number
const validString = (stringOfIntegers) => {
  if (stringOfIntegers === 0) return console.error("empty");  
  const regex = /[0-9\s-.]*/;
  const matchingNumbers = stringOfIntegers.match(regex);
    return (matchingNumbers==stringOfIntegers)?stringOfIntegers:'not a string of integers';
}

//Define array 
const createArrayData = (data) => {
  return data.split(" ").map(string => parseInt(string, 10));
}

//Alert if NaN
const alertIfNaN = (arrayData) => {
  if(arrayData.includes(NaN))return true;
}

// Méthode asynchrone insersionSort
var count = 0;
const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
    count++;
      j--;
    }
    nums[j+1] = temp;
  }
  return nums;
}


const fs = require('fs');
const fileName = process.argv[2];
// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
    console.error(error.message);
    return ;
  }

  //call error test funcitons : empty file?

  validString(data);
  const arrayData = createArrayData(data);
  //console.log(arrayData);
    if (!alertIfNaN(arrayData)) {
      let sorted = insertionSort(arrayData);
      console.log(`Tri par insertion: ${count} comparaisons - ${sorted}`);
  } else {
    console.log('ERROR: wrong input values or empty file');
  }
});