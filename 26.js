// 23) Kiểm tra chuỗi xoay vòng (rotation)
function isRotation(a, b) {
  if (a.length < b.length )return false;
  return (a + a ).includes(b);
}
console.log(isRotation("abcde","cdeab"), "expected true");
console.log(isRotation("abc","cab"), "expected true");
console.log(isRotation("aa","aa"), "expected true");
console.log(isRotation("ab","aba"), "expected false");
console.log(isRotation("con bo co 2 cai canh "," 2 cai canh con bo co"), "expected true");
