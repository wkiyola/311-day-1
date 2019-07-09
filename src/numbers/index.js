const isEven = (num) => {
  // write code for numbers.isEven
if(num % 2 === 0){
  return true
}
}

const sum = (arr) => {
  // write code for numbers.sum
    return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
}
function sumIt(arr){
        return (arr.length === 0) ? 0 : arr[0] + sumIt(arr.slice(1));
}

const comboSum = (arr, num) => {
  // write code for numbers.comboSum
    let thisSum = sumIt(arr)
    if(thisSum === num) {
      return true
    } else {
      return false
    }
}

module.exports = {
  isEven,
  sum,
  comboSum
}