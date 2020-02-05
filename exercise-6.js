function angkaPalindrome (num){
	var condition = false
	while (condition == false){
		num ++
		var numString = num.toString()
		var numStringReverse = ''
		for (var i = numString.length-1;i>=0;i--){
				numStringReverse += numString[i]
		}
		numStringReverse === numString ? condition = true : condition = false
	}
	if (condition == true){
		return num
	}
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001