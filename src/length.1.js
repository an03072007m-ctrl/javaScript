let nums = [4, 8, 15, 16, 23, 42];
let total = 0;

for (let i of nums) {
  total = total +i;   // ❌ sai chỗ này
}
console.log("Tổng:", total);
console.log("Max:",Math.max (...nums));  // ❌ sai nữa
