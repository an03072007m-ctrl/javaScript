let numbers = [2, 5, 8, 9, 11, 15, 17, 20];
let sum  =0
// Kết quả mong muốn: [2, 5, 11, 17]
for(let i of  numbers   ){
 if (i % 2 ===0 ){
   sum+= i

 }
}
console.log ("Tổng số chẳn ",sum);