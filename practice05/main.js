    function fizzBuzzNumber(){
        var output = [];
        for(var i = 1; i <=100; i++){
            if(i % (3*5)===0) {
                output.push('FizzBuzz');
            } else if (i % 5===0){
                output.push('Buzz');
            } else if (i % 3===0){
                output.push('Fizz');
            }else {
                output.push(i);
            }
        }
            return console.log(output);
    }
        fizzBuzzNumber();