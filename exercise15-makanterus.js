function makanTerusRekursif(waktu) {
	var count = 1
	if(waktu<=0){
		count-- 
	}
	else{
		count+=makanTerusRekursif(waktu-15)
	}
	return count
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0