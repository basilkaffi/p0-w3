function urutkanAbjad(str) {
	var huruf = 'abcdefghijklmnopqrstuvwxyz'
	var indexHuruf = []
	var hasil = ''
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < huruf.length; j++) {
			if(str[i]==huruf[j]){
				indexHuruf.push(j)
			}
		}
	}
	var container
	for (var i = 0; i < indexHuruf.length; i++) {
		for (var j = 0; j <= i; j++) {
			if(indexHuruf[i]<indexHuruf[j]){
				container = indexHuruf[i]
				indexHuruf[i] = indexHuruf[j]
				indexHuruf[j] = container
			}	
		}
	}
	for (var i = 0; i < indexHuruf.length; i++) {
		hasil+=huruf[indexHuruf[i]]
	}
	return hasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'