function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b){
  return a * b;
}
function divide(a, b) {
  return a % b;
}
function doMath(a, b, operation) {
  switch (operation) {
    case "+":
      return add(a, b);   // ❌ chỗ này có gì đó sai sai

    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "%":
      return divide(a, b);

    default:
      console.log("Invalid");

  }
}

console.log(doMath(10, 5, "+"));
console.log(doMath(10, 5, "-"));
console.log(doMath(10, 5, "*"));
console.log(doMath(15, 5, "%"));