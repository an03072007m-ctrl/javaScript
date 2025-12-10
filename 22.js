// 19) Đếm số từ trong câu (tách theo khoảng trắng, bỏ khoảng trắng thừa)
/*function countWords(s) {
  return s.split(" ").length-1 ;*/
//}
function countWords(s) {
  s = s.trim();
  if (s === "") return 0;
  return s.split(/\s+/).length;
}
console.log(countWords("hello world"), "expected 2");
console.log(countWords("  a  b  c "), "expected 3");
console.log(countWords(""), "expected 0");
console.log(countWords("one"), "expected 1");
console.log(countWords("two   spaces"), "expected 2");

