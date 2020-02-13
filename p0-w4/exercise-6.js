function digitPerkalianMinimum(angka) {
	var pembagi1
	var pembagi2
	var pembagiStr=''
	var pembagiArray = []
	for(var i = 1; i<=angka;i++){
		if(angka%i==0){
			pembagi1 = i
			pembagi2 = angka/i
			pembagiStr=pembagi1.toString()+pembagi2.toString()
			pembagiArray.push(parseInt(pembagiStr))
		}
	}
	var container
	for (var i = 0; i < pembagiArray.length; i++) {
		for (var j = 0; j <= i; j++) {
			if(pembagiArray[i]<pembagiArray[j]){
				container = pembagiArray[i]
				pembagiArray[i] = pembagiArray[j]
				pembagiArray[j] = container
			}	
		}
	}
	var pembagiTerkecil = pembagiArray[0]
	var hasil = pembagiTerkecil.toString()
	return hasil.length

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2