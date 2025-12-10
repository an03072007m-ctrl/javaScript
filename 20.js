// 17) Đếm ký tự trong chuỗi (tần suất mỗi ký tự)
function countChars(s) {
  const freq = {};
  for (let i = 0; i <= s.length - 1; i++) {
    const ch = s[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log(countChars("aba"), "expected {a:2,b:1}");
console.log(countChars(""), "expected {}");
console.log(countChars("aaAA"), 'expected {a:2,A:2}');
console.log(countChars("ab c"), 'expected {a:1,b:1," ":1,c:1}');
console.log(countChars("xyz!"), 'expected {x:1,y:1,z:1,"!":1}');
