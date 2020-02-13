function fpb(angka1, angka2) {
	var angkaFaktorial
	angka1<angka2 ? angka = angka1 : angka = angka2
	for(var n=0;n<=angka;n++){
		if (angka1%n==0&&angka2%n==0) angkaFaktorial = n
	}
	return angkaFaktorial
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1