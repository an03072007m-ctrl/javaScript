let arr = [10, 30, 20, 50, 40];
let max1=-Infinity
let max2 = -Infinity
for(let n of arr){
  if (n > max1 ){
    max2 = max1;
    max1 = n;
  }else if(n > max2 &&  max1 > n  ){
     max2 = n;
  }
}
console.log("số lớn nhì " ,max2)
