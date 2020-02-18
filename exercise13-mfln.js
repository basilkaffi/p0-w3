function sorting(arrNumber) {
	for(var i = 0; i<arrNumber.length;i++){
		for(var j = 0;j<=i;j++){
			if(arrNumber[i]<arrNumber[j]){
				var container = arrNumber[i]
				arrNumber[i] = arrNumber[j]
				arrNumber[j] = container
			}
		}
	}
	return arrNumber
}

function getTotal(arrNumber) {
	var count = {}
	for(var i = 0; i<arrNumber.length;i++){
		count[arrNumber[i]] = 0
	}
	for(var i = 0; i<arrNumber.length;i++){
		for(number in count){
			if(arrNumber[i]==number){
				count[number]++
			}
		}	
	}
	var teks = ''
	if(arrNumber[arrNumber.length-1]!=undefined){
		teks = `angka paling besar adalah ${arrNumber[arrNumber.length-1]} dan jumlah kemunculan sebanyak ${count[arrNumber[arrNumber.length-1]]} kali`
	}
	return teks
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''