function kaliTerusRekursif(angka) {
	var bagian = 1
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
		return bagian*=angka
	}
	bagian*=kaliTerusRekursif(angka-pengurang)
	if(bagian>=10){
		angka = bagian
		bagian = 1
		return bagian*=kaliTerusRekursif(angka)
	}
	else return bagian
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6