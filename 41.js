let operator = "*";
let a = 5, b = 3;
let result;

switch (operator) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;   // ❌ lỗi tinh vi
    break;
  case "/":
    result = a / b;
    break;
  default:
    result = "Phép tính không hợp lệ";
}

console.log(result);
