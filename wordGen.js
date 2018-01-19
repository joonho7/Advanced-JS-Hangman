//generates word
var wordToPick =["house","techno",'trap','dubstep','trans']
var randomIze = Math.floor(Math.random() * wordToPick.length);
var wordGen = wordToPick[randomIze];
module.exports = wordGen;