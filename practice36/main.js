var theSentence = "four score and seven years ago";
var vowels = "ioeua";
var vowelsFound = "";

function checkingForVowels(sentence){
    for(sentenceIndex = 0; sentenceIndex < sentence.length; sentenceIndex++){
        var currentLetter = sentence[sentenceIndex];
        for(vowelIndex = 0; vowelIndex <= vowels.length; vowelIndex++){
            if (currentLetter === vowels[vowelIndex]){
            vowelsFound += currentLetter;
            }
        }
    }
    return vowelsFound;
}

console.log(checkingForVowels(theSentence));