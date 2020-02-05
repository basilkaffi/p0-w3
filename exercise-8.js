function pasanganTerbesar(num) {
	var numString = num.toString()
	var pasanganString = ''
	var pasangan = []
	for(var i=0;i<numString.length-1;i++){
		pasanganString = numString[i]+numString[i+1]
		pasangan[i] = parseInt(pasanganString)
		for(var j=0;j<=i;j++){
			var container = 0
			if(pasangan[i]>pasangan[j]){
				container = pasangan[i]
				pasangan[i] = pasangan[j]
				pasangan[j] = container
			}
		}
	}
	return pasangan[0]

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99