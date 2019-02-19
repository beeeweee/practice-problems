var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray(newList) {
var output = [];
var stringArray = [];
var numberArray = [];
var booleanArray = [];
for(i=0; i<newList.length;i++){
  if (typeof newList[i] == 'string') {
    stringArray.push(newList[i]);
  } else if (typeof newList[i] == 'number') {
    numberArray.push(newList[i]);
  } else {
    booleanArray.push(newList[i]);
  }
}
  output.push(stringArray, numberArray, booleanArray);
  return output;
}

console.log(groupArray(myArray));

/*

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray(newList) {
var output = [];
var stringArray = [];
var numberArray = [];
var booleanArray = [];

  switch(typeof(newList)){
    case 'number':
      newList = numberArray;
      break;
  }
  return output = numberArray;
}
      console.log(groupArray(myArray));
  
  /*for(i=0; i<newList.length; i++){
  if (typeof newList[i] == typeof string) {
    stringArray.push(newList[i]);
  } else if (typeof newList[i] === typeof number) {
    numberArray.push(newList[i]);
  } else {
    booleanArray.push(newList[i]);
  }
}
  return output = numberArray;
}

console.log(groupArray(myArray));*/


/*var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray(newList) {
var output = [];
var stringArray = [];
var numberArray = [];
var booleanArray = [];
for(i=0; i<=newList.length;i++){
  if (newList[i]= typeof string) {
    stringArray.push(newList[i]);
  } else if (newList[i] = typeof(number)) {
    numberArray.push(newList[i]);
  } else {
    booleanArray.push(newList[i]);
  }
}
  return output = stringArray;
}

console.log(groupArray(myArray));*/