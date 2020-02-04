var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

const dataHandling2 = (array) =>{
  array.splice(4,1,'Pria','SMA Internasional Metro')		//splice
  array[1] = array[1]+'Elsharawy'
  array[2] = 'Provinsi '+array[2]

  var input3 												//split elemen ke-4
  input3 = array[3].split('')
  for(var i = 0; i <input3.length;i++){
    if(input3[i]=='/'){input3[i]='-'}
    input3[i] = input3[i]
  }

  var bulan													//output nama bulan
  bulan = input3[3]+input3[4]
  switch (bulan){
    case '01':
      bulan = 'Januari'
      break
    case '02':
      bulan = 'Februari'
      break
    case '03':
      bulan = 'Maret'
      break
    case '04':
      bulan = 'April'
      break
    case '05':
      bulan = 'Mei'
      break
    case '06':
      bulan = 'Juni'
      break
    case '07':
      bulan = 'Juli'
      break
    case '08':
      bulan = 'Agustus'
      break
    case '09':
      bulan = 'September'
      break
    case '10':
      bulan = 'Oktober'
      break
    case '11':
      bulan = 'November'
      break
    case '12':
      bulan = 'Desember'
      break
    default:
      bulan = 'nama bulan'
      break  
  }

  var newInput3 = []										//sorting (decending)
  newInput3.length = 3
  for(var a = 0;a<input3.length;a++){
    if(a==0){
      newInput3[a] = input3[a] + input3[a+1]
    }
    else if(a==3){
      newInput3[a-2] = input3[a]+input3[a+1]
    }
    else if(a==6){
      newInput3[a-4] = input3[a]+input3[a+1]+input3[a+2]+input3[a+3]
    }
  }
  var input3sort = newInput3.sort(function(a,b){return b-a})

  var input3Str = input3.join('')							//join

  var nama = input[1].slice(0,14)							//slice


  return console.log(array), console.log(bulan), console.log(input3sort), console.log(input3Str), console.log(nama)
}

dataHandling2(input)