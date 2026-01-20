function maxSubarrayWrong(a) {
  let best = - Infinity ;   // ❌ bug khởi tạo = 0
  let cur = - Infinity;
  for (let x of a) {
    cur = Math.max(x, cur + x);
    best = Math.max(best, cur);
  }
  return best;
}

console.log(maxSubarrayWrong([-2,1,-3,4,-1,2,1,-5,4]), "expected 6");
console.log(maxSubarrayWrong([-1,-2,-3]), "expected -1 ❌ sẽ in ra 0");
