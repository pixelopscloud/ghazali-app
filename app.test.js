const { add, greet, subtract, divide } = require("./app");

test("add works", () => {
  expect(add(2, 3)).toBe(5);
});

test("greet works", () => {
  expect(greet("Ghazali")).toBe("Hello, Ghazali!");
});
test("subtract works", () => {
  expect(subtract(5, 3)).toBe(2);
});
test("divide works", () => {
  expect(divide(6, 3)).toBe(2);
});

test("divide by zero throws", () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});