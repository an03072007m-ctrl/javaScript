function filterNumbers(arr, type) {
  // code ở đây
 let result =[]
  for (let n of arr) {
  if (type === "even" && n % 2 === 0){
    result.push(n);
  } else if (type ==="odd" && n % 2 !=0){
    result.push(n);
  }}
return result
}

console.log(filterNumbers([1, 2, 3, 4, 5, 6], "even"));
// Kết quả: [2, 4, 6]
