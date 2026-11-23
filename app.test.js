const { add, greet, multiply } = require("./app");

test("add works", () => {
  expect(add(2, 3)).toBe(5);
});

test("greet works", () => {
  expect(greet("Ghazali")).toBe("Hello, Ghazali!");
});

test("multiply works", () => {
  expect(multiply(2, 3)).toBe(6);
});