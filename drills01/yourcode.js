
function sumArray(numbers){
    let sumNumbers= 0;
    for(let i = 0; i < numbers.length; i++){
        sumNumbers = numbers[i] + sumNumbers;
    }
    return sumNumbers;
}

function fitWithinVal(numbers, maxVal){
let currentVal = 0;
let addedNumbers = [];
for(let i = 0; i < numbers.length; i++){
    currentVal = currentVal + numbers[i];
    if (currentVal < maxVal){
        addedNumbers.push(numbers[i]);
        break;
    } else if(currentVal > maxVal){
        currentVal = currentVal - numbers[i];
        break;
    }
}
return addedNumbers;
}

function getAllNamesShorterThan(names, numberOfNames){
    let selectedNames = [];
    for(let i = 0; i < names.length; i++){
        if(names[i].length <= numberOfNames){
            selectedNames.push(names[i]);
        }
    }
    return selectedNames;

}

function makeLabel(nameObject){
    return (`Miss ${nameObject.givenName} ${nameObject.familyName} ${nameObject['home address'].streetNumber} ${nameObject['home address'].streetName} ${nameObject['home address'].city} ${nameObject['home address'].state} ${nameObject['home address'].zip}`);
}

var namesArray = ['Clyde', 'Sue', 'Jerry', 'Jo']


var input =

    {
        "familyName": "McGee",
        "givenName": "Chuckles",
        "greeting": "Miss.",
        "age": 28,
        "height": 165,
        "colors": {
            "eye": "green",
            "hair": "green"
        },
        "home address": {
            "streetNumber": "12345",
            "streetName": "Any St",
            "state": "Mo",
            "zip": 63102,
            "city": "Kansas City"
        }
    }
// ]
//     - return "Miss. Chuckles McGee\n12345 Any St\nKansas City, Mo 63102"