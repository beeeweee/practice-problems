function capitalizeEveryOtherLetter(string){
    var newSentence = "";
    for(stringIndex = 0; stringIndex < string.length; stringIndex++){
        if(stringIndex%2){
            newSentence += string[stringIndex].toUpperCase();
        }
        else {
            newSentence += string[stringIndex];
        }
    }
    return newSentence;
}
console.log(capitalizeEveryOtherLetter('amazing'))