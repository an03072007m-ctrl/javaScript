let sum = 0;
for (let i = 1; i <= 10; i++) {  // ❌ sai
  if (i % 2 === 0) {                // ❌ sai
    sum += i;
  }
}
console.log("Tổng số chẵn:", sum);
