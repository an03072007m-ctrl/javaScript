

// 20) Tìm từ dài nhất trong câu (bỏ dấu câu)
function longestWord(s) {
  const words = s.replace(/[.,_!-]+/g, " ").split(" ");
  let best = "";
  for (const w of words) if (w.length >= best.length) best = w;
  return best;
}
console.log(longestWord("I love JS."), "expected love");
console.log(longestWord("Hello, world!"), "expected Hello");
console.log(longestWord("a ab abc abcd abc!"), "expected abcd");
console.log(longestWord("one-two three"), "expected three");
console.log(longestWord(""), "expected");
