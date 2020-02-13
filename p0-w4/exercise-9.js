function checkAB(num) {
	for(var i = 0; i<num.length;i++){
		for(var j = 0; j<num.length;j++){
			if(num[i]=='a'&&num[j]=='b' && j-i===4){
				return true
			}
			if(num[i]=='b'&&num[j]=='a' && j-i===4){
				return true
			}
		}
	}
	return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false