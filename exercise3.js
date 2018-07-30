function highestScore (students) {
    // Code disini
    var objScore = {}
    for(var i = 0; i<students.length; i++){
      if(typeof objScore[students[i].class] === 'undefined'){
        objScore[ students[i].class ] = {
          name : students[i].name,
          score : students[i].score
        }
      }
      if(objScore[ students[i].class ].score < students[i].score){
        objScore[ students[i].class ].name = students[i].name
        objScore[ students[i].class ].score = students[i].score
      }
    }
    return objScore
  }
  
  // TEST CASE
  console.log(highestScore([
    
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 91,
      class: 'foxes'
    },
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 90,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  console.log('------------------------------------')
