var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

const dataHandling = (array) => {
	for(var i = 0; i<array.length; i++){
		for(var j = 0; j<array[i].length; j++){
			var id=''
			var nama=''
			var ttl=''
			var hobi=''
			switch (j){
				case 0:
					id='Nomor ID: '+array[i][j]
					break
				case 1:
					nama='Nama Lengkap: '+array[i][j]
					break
				case 2:
					ttl='TTL: '+array[i][j]+' '+array[i][j+1]
					break
				case 3:
					hobi='Hobi: '+array[i][j+1]
					break
			}
		var result = console.log(id+nama+ttl+hobi)
		}
	}
  return result
}
dataHandling(input)