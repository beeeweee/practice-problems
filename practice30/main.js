/*
## random number or array element

Build a function, random_range, that takes 2 parameters, start_num and end_num.  OPTIONALLY: If start_num is an array instead (and end_num isn't specified), then it returns a random element from the array

- 
- Example:
	- random_range(2,15)
		- returns 7
	- random_range(1,100)
		- returns 85
	- random_range(['a','b','c','d','e'])
		- returns 'b'

*/
var numberArray = [1,2,3,4,5,6];

function randomNumberGenerator(min,max){
    if (max === true){
        var randomNumberChosen = Math.floor(Math.random()*max) +min;
        return randomNumberChosen; 
    } else {
    var RandomNumberChosenNoMax = Math.floor(Math.random()*min.length) +min[0];
    return RandomNumberChosenNoMax;
    }
}

console.log(randomNumberGenerator(1,10));