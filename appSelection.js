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

// Méthode asynchrone selectionSort
var count = 0;
const selectionSort = (inputArr) => {
  let n = inputArr.length;
  for(let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for(let j = i+1; j < n; j++){
      if(inputArr[j] < inputArr[min]) {
          min=j; 
      }
      count++;
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i]; 
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;      
    }
  }
  return inputArr;
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
      let sorted = selectionSort(arrayData);
      console.log(`Tri par sélection: ${count} comparaisons - ${sorted}`);
  } else {
    console.log('ERROR: wrong input values or empty file');
  }
});