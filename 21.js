// 18) Xóa khoảng trắng trong chuỗi (remove all spaces)
function removeSpaces(s) {
  return s.replace(/\s+/g, "");
}
console.log(removeSpaces("a b c"), "expected abc");
console.log(removeSpaces("  hello world  "), "expected helloworld");
console.log(removeSpaces("nospace"), "expected nospace");
console.log(removeSpaces("a   b"), "expected ab");
console.log(removeSpaces("  a  "), "expected a");