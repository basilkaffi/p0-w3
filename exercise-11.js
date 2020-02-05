function tentukanDeretAritmatika(arr) {
	var selisih = 0
	var arrSelisih = []
	var condition
	for(var i = 0;i<arr.length-1;i++){
		selisih = arr[i+1]-arr[i]			//cari selisih antar elemen
		arrSelisih[i] = selisih 				//membuat array baru untuk menampung selisih masing2 elemen
		for(var j=0;j<i;j++){
			arrSelisih[i]==arrSelisih[j] ? condition = true : condition = false	//jika setiap elemen array penampung sama maka true
		}
	}
	return condition
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false