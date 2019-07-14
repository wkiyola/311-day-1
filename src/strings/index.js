const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)

}

const pairs = (str) => {
  // write code for strings.pairs
  let strArr = Array.from(str)

   let joinedArray = []
  while(strArr.length > 0) {
    // console.log("COUNT")
    let chunks = [strArr[0], strArr[1]]
    strArr = strArr.slice(2, strArr.length)
    let joinedChunks = chunks.join('')
    joinedArray.push(joinedChunks)
  }
  console.log(joinedArray)

  for (let index = 0; index < strArr.length; index+=2) {
    console.log(index)
    let element = strArr[index]
    let chunks = [element, strArr[index + 1]]
    let joinedChunks = chunks.join('')
    console.log(joinedChunks)
  }

  const new_array = strArr.map((currentValue, index, array) => {
    console.log(index)
    if (index % 2 !== 0) {
      let chunks = [array[index - 1], currentValue]
      let joinedChunks = chunks.join('')
      console.log(joinedChunks)
    }
  })
}
pairs('abcdefghijklmnop')



const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;

}

module.exports = {
  split,
  pairs,
  reverse
}