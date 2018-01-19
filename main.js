//prompts the games and grabs users inputs and validate it using letter/word/wordgen
var inquierer = require('inquirer');
var letter = require('./letter');
var word = require('./word');
var wordGen = require('./wordGen');

var game = function(){
inquierer.prompt({
	name:'guess',
	type:'input',
	message: 'The category is edm genre!  Please input a letter of your guess'
})
 .then(function(answer){
	isThisLetter(answer.guess);
	checkWord();

 })

}

game();