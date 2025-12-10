// 16) Bội chung nhỏ nhất (LCM) của hai số
function lcm(a, b) {
  function gcd(x, y)
  {
    while (y) [x, y] = [y, x % y];
    return x;
  }
  return (a * b) / gcd(a, b);
}
console.log(lcm(4, 6), "expected 12");
console.log(lcm(21, 6), "expected 42");
console.log(lcm(0, 5), "expected 0");
console.log(lcm(8, 14), "expected 56");
console.log(lcm(9, 9), "expected 9");