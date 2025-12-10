// 30) Đổi tiền – số đồng ít nhất để đạt amount (min coins)
function coinChangeMin(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] =0
  for (const c of coins)
    { 
      for (let a = c; a <= amount; a++) {
      /*if (a - c >= 0)*/ dp[a] = Math.min(dp[a] || Infinity, dp[ a - c ]+ 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log(coinChangeMin([1,2,5], 11), "expected 3");
console.log(coinChangeMin([2], 3), "expected -1");
console.log(coinChangeMin([1], 0), "expected 0");
console.log(coinChangeMin([1,3,4], 6), "expected 2");
console.log(coinChangeMin([2,5,10,1], 27), "expected 4");