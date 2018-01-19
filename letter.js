//checks if users guess is a letter
var tries = wordGen.length;
var userGuess = [];

function isThisLetter(letter){
	if(typeof(letter === 'string'){
		userGuess.push(letter)
	}else{
		console.log("_")
		tries --
	}
	if(tries === 0){
		console.log('Try again!')
	}
}

module.exports = isThisLetter;