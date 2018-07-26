function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    
    var output = []
    for(i = 0 ; i < arrPenumpang.length; i++){
      var bayar = 0
      for(var j = 0; j < rute.length; j++){
        if(rute[j] === arrPenumpang[i][2]){
          bayar += j
        }
        if(rute[j] === arrPenumpang[i][1]){
          bayar -= j
        }
      }
      
      var objPenumpang = { penumpang: arrPenumpang[i][0], naikDari: arrPenumpang[i][1], tujuan: arrPenumpang[i][2], bayar: bayar*2000 }
  
      // console.log(arrPenumpang[i][0])
      
  
      
      output.push(objPenumpang)
    }
    return output
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  // console.log(naikAngkot([])); //[]