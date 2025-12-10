// 27) Maximum Subarray (Kadane) – tổng lớn nhất dãy con liên tiếp
function maxSubarraySum(a) {
  let best = a[0];
    let cur =a[ 0];
  for (let i = 1; i < a.length; i++) {
    cur = Math.max( a[i], cur + a[i]);
    best = Math.max(best, cur);
  }
  return best;
}
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]), "expected 6");
console.log(maxSubarraySum([1]), "expected 1");
console.log(maxSubarraySum([5,4,-1,7,8]), "expected 23");
console.log(maxSubarraySum([-1,-2,-3]), "expected -1");
console.log(maxSubarraySum([0,0,0]), "expected 0");q