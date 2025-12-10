let numbers = [2, 5, 8, 9, 11, 15, 17, 20];
function isPrime(n){
  if (n  <  2  )return false;
  for(let i=2 ; i<= Math.sqrt (n);i++){
    if(n % i ===0 ) return false;

  }
  return true;
}
let Primes =[];
for (let num of numbers ){
  if(isPrime (num )){
    Primes.push(num);
  }
}
console.log ("các số nguyên tố ", Primes);