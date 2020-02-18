function changeVocals (str) {
	var tempVocal = ''
	for(var i = 0; i<str.length;i++){
		switch(str[i]){
			case 'a':
				tempVocal+='b'
				break
			case 'e':
				tempVocal+='f'
				break
			case 'i':
				tempVocal+='j'
				break
			case 'o':
				tempVocal+='p'
				break
			case 'u':
				tempVocal+='v'
				break
			case 'A':
				tempVocal+='B'
				break
			case 'E':
				tempVocal+='F'
				break
			case 'I':
				tempVocal+='J'
				break
			case 'O':
				tempVocal+='P'
				break
			case 'U':
				tempVocal+='V'
				break
			default:
				tempVocal+=str[i]
				break
		}
	}
	return tempVocal
}

function reverseWord (str) {
	var tempReverse = ''
	for(var i = str.length-1; i>=0; i--){
		tempReverse+=str[i]
	}
	return tempReverse
}

function setLowerUpperCase (str) {
	var tempLowerUpper = ''
	var kamus = 'abcdefghijklmnopqrstuvwxyz'
	var kamus2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	for(var i = 0; i<str.length; i++){
		for(var j = 0; j<kamus.length; j++){
			if(str[i]==kamus[j]){
				tempLowerUpper+=kamus2[j]
			}
			if(str[i]==kamus2[j]){
				tempLowerUpper+=kamus[j]
			}
		}
	}
	return tempLowerUpper
}

function removeSpaces (str) {
	var tempSpaces = ''
	for(var i = 0; i<str.length; i++){
		if(str[i]!=' ')
		tempSpaces+=str[i]
	}
	return tempSpaces
}

function passwordGenerator (name) {
	var vocal = changeVocals(name)
	var reverse = reverseWord(vocal)
	var lowerUpper = setLowerUpperCase(reverse)
	var spaces = removeSpaces(lowerUpper)
	var result = spaces
	if(name.length<5) result = 'Minimal karakter yang diinputkan adalah 5 karakter'
	return result
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'