function palindrome (kata){
	var reverseKata =''
	var condition
	for(var i = kata.length-1; i>=0;i--){
		reverseKata += kata[i]
	}
	kata === reverseKata ? condition = true : condition = false
	return condition
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false