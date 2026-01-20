function reverseArray(arr) {
 return arr.slice().reverse();

}
console.log(reverseArray([1,2,3])) // mong đợi: [3,2,1]
console.log(reverseArray([5,65,98,90]))
/*function reverseArray(arr) {
  const result = []
  for (let i = arr.length-1; i >=0; i--) {
    result.push(arr[i])
  }
  return result
}
console.log(reverseArray([1,2,3])) // mong đợi: [3,2,1]*/