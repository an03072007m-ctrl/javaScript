
// 25) Longest Common Substring (độ dài)
function longestCommonSubstringLen(a, b) {
  const n = a.length, m = b.length;
  const dp = Array.from({length: n+1 }, () =>
    Array(m+1).fill(0));
  let ans = 0;

  for (let i =1  ; i <= n; i++) {
    for (let j =1 ; j <= m; j++) {
     if (a[i-1] === b[j-1]) dp[i][j] = dp[i-1][j-1] + 1;

      ans = Math.max(ans, dp[i][j]);
    }
  }
  return ans;
}
console.log(longestCommonSubstringLen("abcde","abfde"), "expected 2");
console.log(longestCommonSubstringLen("abcdef","zcdemf"), "expected 3");
console.log(longestCommonSubstringLen("aaaa","aa"), "expected 2");
console.log(longestCommonSubstringLen("xyz","abc"), "expected 0");
console.log(longestCommonSubstringLen("ABcd","cdAB"), "expected 2");