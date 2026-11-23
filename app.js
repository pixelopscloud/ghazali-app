function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

module.exports = { add, greet, subtract, divide };