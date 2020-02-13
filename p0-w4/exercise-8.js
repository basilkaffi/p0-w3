function tukarBesarKecil(kalimat) {
	var kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	var kamus2 = 'abcdefghijklmnopqrstuvwxyz'
	var hasil = ''
	for(var i=0;i<kalimat.length;i++){
	var alfabet = false
		for(var j=0;j<kamus.length;j++){
			if(kalimat[i]==kamus[j]){
				hasil+=kamus2[j]
				alfabet = true
			}
			if(kalimat[i]==kamus2[j]){
				hasil+=kamus[j]
				alfabet = true
			}
		}
		if(alfabet==false) hasil+=kalimat[i]
	}
	return hasil
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"