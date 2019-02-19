var myArray = ['mouse', 'cat', 'dog', 'human'];

function sortWords(array1){
    var output = [];
    for(array1Index =0; array1Index<array1.length;array1Index++){
        
        var wordCompare = array1[array1Index];
        
        for(wordCompareIndex=0; wordCompareIndex<wordCompare.length;wordCompareIndex++){
            
            if(wordCompare[wordCompareIndex]<array1[wordCompareIndex]){
                output.push(array1[array1Index]);
            } else {
                
            }
        }    
    }
    return output;
}

console.log(sortWords(myArray));