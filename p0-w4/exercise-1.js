function angkaPrima(angka) {
	var faktorial
	var jumlahFaktorial = 0
	var angkaPrima
	for(var i = 1; i<=angka;i++){
		angka%i==0 ? faktorial = true: faktorial = false
		if(faktorial == true){
			jumlahFaktorial++
		}
	}
	jumlahFaktorial==2 ? angkaPrima = true : angkaPrima = false
	return angkaPrima
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false