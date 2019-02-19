var myArray= ['hello', 45, 'bob', '23', 'bill'];
function reverseArray(arrayList){
  var output = [];
  for(i=arrayList.length-1; i>=0; i--){
    output.push(arrayList[i]);
  }
  return output;
}

console.log(reverseArray(myArray));