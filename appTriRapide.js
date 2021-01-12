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

// Méthode asynchrone quickSort
var count = 0;
const quickSort = values => {
  if (values.length <= 1) {
    return values;
  }

  let lessThanPivot = [];
  let greaterThanPivot = [];
  const pivot = values.shift();

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    count++;
    value <= pivot ? lessThanPivot.push(value) : greaterThanPivot.push(value);
  }

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
};


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
      let sorted = quickSort(arrayData);
      console.log(`Tri rapide: ${count} comparaisons - ${sorted}`);
  } else {
    console.log('ERROR: wrong input values or empty file');
  }
});