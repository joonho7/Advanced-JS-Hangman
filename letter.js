//checks if users guess is a letter
var wordGen = require('./wordGen')

var letter = function (){
var tries = wordGen.length;
var userGuess = [];

function isThisLetter(letter){
	if(typeof(letter) === 'string'){
		for(var i =0; i<wordGen.length; i++){
		if(letter === wordGen[i]){
			userGuess.push(letter)
		 }	
		}
	}else{
		console.log("_")
		tries --
	}
	if(tries === 0){
		console.log('Try again!')
	}
  }
}

module.exports = letter;