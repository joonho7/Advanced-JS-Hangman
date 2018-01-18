//checks if users guess is a letter
function isThisLetter(x){
	if(typeof(x) === 'string'){
		console.log(x)
	}else{
		console.log("_")
	}
}

export.isThisLetter = isThisLetter;