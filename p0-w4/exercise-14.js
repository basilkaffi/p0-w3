function naikAngkot(arrPenumpang) {
	rute = ['A', 'B', 'C', 'D', 'E', 'F'];
	var result = []
	for(var a = 0; a<arrPenumpang.length;a++){
		var obj ={
		  	penumpang: arrPenumpang[a][0],
		  	naikDari: arrPenumpang[a][1],
		  	tujuan: arrPenumpang[a][2],
		}
		for(var i = 0; i<rute.length;i++){
			if(rute[i]==obj.tujuan) var indexTujuan = i
			if(rute[i]==obj.naikDari) var indexNaikDari = i
			obj.bayar = (indexTujuan-indexNaikDari)*2000
		}
		result.push(obj)
	}
	return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]