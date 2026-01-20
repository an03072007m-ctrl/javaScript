// 21) Sắp xếp chữ cái trong chuỗi theo thứ tự alphabet (không phân biệt hoa thường)
function sortStringAlpha(s) {
  return s.toLowerCase().split("").sort().join("");
}
console.log(sortStringAlpha("cBa"), "expected abc");
console.log(sortStringAlpha(""), "expected ");
console.log(sortStringAlpha("aAaA"), "expected aaaa");
console.log(sortStringAlpha("zYx"), "expected xyz");
console.log(sortStringAlpha("bca"), "expected abc");
