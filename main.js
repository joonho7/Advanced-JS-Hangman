//prompts the games and grabs users inputs and validate it using letter/word/wordgen
var inquierer = require('inquierer');
var letter = require('isThisLetter');
var word = require('word');
var wordGen = require('wordGen');

inquierer.prompt({
	name:'guess',
	type:'input',
	message: 'The category is edm genre!  Please input a letter of your guess'
})
.then(function(answer){
	

})

module.exports = answers;