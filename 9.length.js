let arr = [1, 5, 8, 9, 11, 12]
let odd = []
for (let n of arr){
  if( n % 2 === 1){
    odd.push(n)
  }
}
console.log( "đây là số lẻ",odd )