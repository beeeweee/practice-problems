var unsortedArray = ['mouse', 'cat', 'dog', 'human'];
​
function bubbleSort(array){
 array = array.slice();
 var swapped = false;
 
 do{
  swapped = false;
  for(var i = 0; i < array.length; i++){
   if(array[i] > array[i+1]){
    var temp = array[i];
    array[i] = array[i+1];
    array[i+1] = temp;
    swapped = true;
   }
  }
 }while(swapped);
 
 return array;
}

console.log(bubbleSort(unsortedArray));