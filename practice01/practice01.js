var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];


function biggerWords(targetWord, wordList){
  var output = [];
  for(i=0 ; i < wordList.length; i++){
    if(targetWord.length < wordList[i].length){ //use [i] first to get the length of each string in the array
      output.push(wordList[i]);
    }
  }
    return output;
}
biggerWords('whales', myArray);