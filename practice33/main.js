function invertingNumbers(num1){
    if(Number.isInteger(num1)) {
        return num1*-1;
    } else {
      return false;
    }
}

console.log(invertingNumbers(3));