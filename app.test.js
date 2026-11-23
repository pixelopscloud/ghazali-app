const { add, greet, multiply, subtract } = require("./app");

test("add works", () => {
  expect(add(2, 3)).toBe(5);
});

test("greet works", () => {
  expect(greet("Ghazali")).toBe("Hello, Ghazali!");
});
test("subtract works", () => {
  expect(subtract(5, 3)).toBe(2);
});