// checks if users guess = the word
var wordGen =  require('/.wordGen')
var score = 0;

function checkWord(word){
	if(word.toLowerCase() === wordGen){
	console.log('You have won!')
	score ++
	}
 }

 module.exports = word;
