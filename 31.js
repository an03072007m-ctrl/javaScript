// 28) Leo cầu thang (n bậc, mỗi bước 1 hoặc 2) – số cách
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 0;
  for (let i = 0; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(climbStairs(1), "expected 1");
console.log(climbStairs(2), "expected 2");
console.log(climbStairs(3), "expected 3");
console.log(climbStairs(4), "expected 5");
console.log(climbStairs(5), "expected 8");
