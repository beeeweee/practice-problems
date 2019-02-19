answer.js

var numbersArray = [5,3,2,5,1];

function numberRandomizer(array1){
var currentIndex = array1.length;
var randomIndex, temporaryValue;
    while (0!== currentIndex) {
    randomIndex = Math.floor(Math.floor(Math.random()*currentIndex);
        currentIndex--;

        temporaryValue = array1[currentIndex];
        array1[currentIndex] = array1[randomIndex];
        array1[randomIndex] = temporaryValue;
}
return array1;
}

var shuffle = numberRandomizer(numbersArray);
console.log(shuffle);