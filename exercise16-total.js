function totalDigitRekursif(angka) {
	var bagian = 0
	var pengurang = 0
	if(angka>=10000){
		bagian = Math.floor(angka/10000)
		pengurang = bagian*10000
	}
	else if(angka>=1000){
		bagian = Math.floor(angka/1000)
		pengurang = bagian*1000
	}
	else if(angka>=100){
		bagian = Math.floor(angka/100)
		pengurang = bagian*100
	}
	else if(angka>=10){
		bagian = Math.floor(angka/10)
		pengurang = bagian*10
	}
	else if(angka>=0){
		return bagian+=angka
	}
	return bagian+=totalDigitRekursif(angka-pengurang)
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5