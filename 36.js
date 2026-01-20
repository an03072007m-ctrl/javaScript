function maxProductWrong(a) {
  let ans = a[0];
  let curMax = a[0];
  let curMin = a[0];

  for (let i = 1; i < a.length; i++) {
    let x = a[i]
    let oldMax = curMax;
    curMax = Math.max(x, oldMax * x, curMin * x);
    curMin = Math.min(x, oldMax * x, curMin * x); // ❌ bug tiềm ẩn
    ans = Math.max(ans,curMax);
  }

  return ans
}

console.log(maxProductWrong([2,3,-2,4]), "expected 6");  // 2*3
console.log(maxProductWrong([-2,0,-1]), "expected 0");   // chỉ lấy số 0
console.log(maxProductWrong([-2,3,-4]), "expected 24");  // (-2)*3*(-4)
