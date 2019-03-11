
//COMPLETED 
let oddeven = [2, 5, 1, 2, 3, 3, 5, 5, 5, 6, 8, 2, 20, 'cat', 13, 3]

function whileOddAndEvenNumbers(param1) {
    var cleanArray = [];
    var odd = [];
    var even = [];
    var index = 0;
    while (param1.length > index) {
        var compare = param1[index];
        if (!isNaN(param1[index])) {
            for (var cleanIndex = 0; cleanIndex <= cleanArray.length; cleanIndex++) {
                if (param1[index] === cleanArray[cleanIndex]) {
                    compare = undefined;
                    break;
                }
            }
            cleanArray.push(param1[index]);
            if (compare % 2 === 0) {
                even.push(param1[index]);
            } else if (compare % 2 === 1) {
                odd.push(param1[index]);
            }

    }
    index++

}
return console.log(odd, even);
}
console.log(whileOddAndEvenNumbers(oddeven));