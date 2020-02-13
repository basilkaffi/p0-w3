function changeMe(arr) {
	var attribute = ['firstName','lastName','gender','age']
	for (var i = 0; i < arr.length; i++) {
		var obj = {}
		for (var j = 0; j < attribute.length; j++) {
			obj[attribute[j]]=arr[i][j]
			if(attribute[j]=='age'){
				if(obj[attribute[j]]==undefined) obj[attribute[j]]='Invalid Birth Year'
				else obj[attribute[j]] = 2020 - arr[i][j]
			}
		}
		console.log(i+1+'. '+arr[i][0]+' '+arr[i][1]+':')
		console.log(obj)
	}
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""