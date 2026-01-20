function maxAlternatingSumWrong(a) {
  let even = 0; // tổng max khi kết thúc bằng cộng
  let odd = 0;  // tổng max khi kết thúc bằng trừ

  for (let x of a) {
    let oldEven = even;
    even = Math.max(even, odd - x);
    odd = Math.max(odd, oldEven + x);
    // ❌ bug tiềm ẩn: đáng lẽ phải là oldEven - x
  }

  return Math.max(even, odd);
}

console.log(maxAlternatingSumWrong([4,2,5,3]), "expected 7");
console.log(maxAlternatingSumWrong([5,6,7,8]), "expected 8");
console.log(maxAlternatingSumWrong([6,2,1,2,4,5]), "expected 10");
