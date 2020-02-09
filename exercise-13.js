function targetTerdekat(arr) {
	var i = 0
	while (arr[i]==' '){
		i++
	}
	var awal = arr[i]
	var j = 0
	var index
	while(arr[j]==' '||arr[j]==awal){
		if(arr[j]==awal) index = j
		j++
	}
	if (arr[j] == undefined) j = index
	return j-index
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2