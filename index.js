// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
  return (string="special") => {
    return `You are ${flair}${string}${flair}!`
  }
}

let Calculator = {
  add(x, y)  { 
    return x + y
  },
  subtract(x, y) {
    return x - y
  },
  multiply(x, y) {
    return x * y
  },
  divide(x, y) {
    return x / y
  }
} 

function actionApplyer(int, arr) {
  let x = int
  for (let i=0; i < arr.length; i++) {
    x = arr[i](x)
  }
  
  return x

};