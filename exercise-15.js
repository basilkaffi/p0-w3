function groupAnimals(animals) {
	var container
	var inisial = ''
	for(var i = 0; i<animals.length;i++){
		for(var j = 0; j<=i;j++){
			if(animals[i][0]<animals[j][0]){
				container = animals[i]
				animals[i] = animals[j]
				animals[j] = container
			}
		}
	}
	for(var i = 0; i<animals.length;i++){
		inisial +=animals[i][0]
	}
	var arrayInisial = []
	for (var i = 0;i<inisial.length;i++){
		var flag = true
		for(var j=0;j<arrayInisial.length;j++){
			if(inisial[i]==arrayInisial[j]){
				flag = false
			}
		}
		if (flag == true){
			arrayInisial.push(inisial[i])
		}
	}
	var result = []
	for(var i = 0; i<arrayInisial.length;i++){
		result.push([])
		for(var j = 0;j<animals.length;j++){
			if(animals[j][0]==arrayInisial[i]) result[i].push(animals[j])
		}
	}
	return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]