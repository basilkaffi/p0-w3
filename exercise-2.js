const balikString = str =>{
	var balikString =''
	for(var index=str.length-1;index>=0;index--){
		balikString += str[index]
	}
	return balikString
}
var text = 'hello word!'
console.log(balikString(text))