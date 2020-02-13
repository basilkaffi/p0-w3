function ubahHuruf(kata) {
	var huruf = 'abcdefghijklmnopqrstuvwxyz'
	var hasil = ''
	for (var i = 0; i < kata.length; i++) {
		for (var j = 0; j < huruf.length; j++) {
			if(kata[i]==huruf[j]){
				var h = j+1
				if(h==huruf.length) h = 0
				hasil+=huruf[h]
			}
		}
	}
	return hasil
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu