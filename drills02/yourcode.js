

function countOccurences(animalArray, animalName) {
    let count = 0;
    for (let i = 0; i < animalArray.length; i++) {
        if (animalName === animalArray[i]) {
            count++
        }
    }
    return count;
}

function wordLengths(wordArray) {
    wordLength = [];
    for (let i = 0; i < wordArray.length; i++) {
        wordLength.push(wordArray[i].length)
    }
    return wordLength;
}

function getMinMaxMean(numbersArray) {
    let sumArray = 0;
    let numberCount = numbersArray.length;
    let minMaxMean = {
        min: numbersArray[0],
        max: numbersArray[0],
        mean: 0,
    }
    for(let i = 0; i < numbersArray.length; i++){
        sumArray += numbersArray[i];
        if (numbersArray[i] < minMaxMean.min){
            minMaxMean.min = numbersArray[i];
        } else if (numbersArray[i] > minMaxMean.max) {
            minMaxMean.max = numbersArray[i];
    }
}
    minMaxMean.mean = sumArray / numberCount;
return minMaxMean;
}

function findMode(numbersArray) {
    let numberCount = {
        number: null,
        count: 0,
    }
    currentCount = 0;
    for (let i = 0; i < numbersArray.length; i++){
        for(let p = 1; p < numbersArray.length; p++){
            if (numbersArray[i] === numbersArray[p]){
                currentCount++;
            }
        }
        if(currentCount > numberCount.count){
            numberCount.number = numbersArray[i];
            numberCount.count = currentCount;
        }
        currentCount = 0;
    }
    
    return numberCount;
}

var input = [3, 1, 9, 12, 4] ;
var numberInput = [5, 2, 7, 18, 2, 42, 5, 2] ;