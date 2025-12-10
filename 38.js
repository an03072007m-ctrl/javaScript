function minDeletionsWrong(s) {
  let n = s.length;
  let prefixB = Array(n+1).fill(0);
  let suffixA = Array(n+1).fill(0);

  for (let i = 0; i < n; i++) {
    prefixB[i+1] = prefixB[i] + (s[i] === 'b' ? 1 : 0);
  }
  for (let i = n-1; i >= 0; i--) {
    suffixA[i] = suffixA[i+1] + (s[i] === 'a' ? 1 : 0);
  }

  let ans = n;
  for (let i = 0; i <= n; i++) {
    // ❌ bug: chưa xét đủ trường hợp cut ngay sau n
    ans = Math.min(ans, prefixB[i] + suffixA[i]);
  }
  return ans;
}

console.log(minDeletionsWrong("aababbab"), "expected 2");
console.log(minDeletionsWrong("bbaaaa"), "expected 0");
console.log(minDeletionsWrong("abab"), "expected 1");
