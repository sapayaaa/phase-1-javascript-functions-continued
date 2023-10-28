// code your solution here
function saturdayFun(defaultActivity = "roller-skate"){
  return `This Saturday, I want to ${defaultActivity}!`
}

function mondayWork(defaultActivity = `go to the office`) {
  return `This Monday, I will ${defaultActivity}.`
}

function wrapAdjective(sirName = "!!") {
  return function(adjective = "a dedicated programmer"){
      return `You are ${sirName}${adjective}${sirName}!`
  }
}
