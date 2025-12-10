let arr= [4, 9, 12, 7, 8, 10];
let even = []
for(let n of arr){
  if (n % 2 ===0 ){
    even.push(n);
  }
}
console.log("là số chẳn",even);