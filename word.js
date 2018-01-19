// checks if users guess = the word
var wordGen =  require('./wordGen')
var letter = require('./letter')

var word = function(){
var score = 0;

function checkWord(userGuess){
	if(userGuess.toString().toLowerCase() === wordGen){
	console.log('You have won!')
	score ++
	}
  }
}

 module.exports = word;
