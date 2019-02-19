function findingTheMiddleLetter(string1){
    if (string1.length % 2 === 0){
      var middleEvenCount = string1.length/2;
      var middleEven = string1.substring(middleEvenCount-1,middleEvenCount+1);
      return middleEven;
  } else {
      var middleOddLetters = string1.length/2;
      var middleOdd = string1.substring(middleOddLetters-0.5,middleOddLetters+0.5);
      return middleOdd;
  }
}
console.log(findingTheMiddleLetter('hall'));