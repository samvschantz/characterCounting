function characterCounting(str){

  var result = {}

  var lowerCaseString = str.split(' ').join('').toLowerCase()

  console.log(lowerCaseString)

  var splicePosition = []

  console.log(result[lowerCaseString.charAt(2)])

  for (i = 0; i < lowerCaseString.length; i++){
    if (result[lowerCaseString.charAt(i)] === undefined){
      result[lowerCaseString.charAt(i)] = 0
    }
    if (result[lowerCaseString.charAt(i)] >= 0){
      result[lowerCaseString.charAt(i)] ++
    }
  }
  return result
}

