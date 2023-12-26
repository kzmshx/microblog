import { divide, ZeroDivisionError } from "./divide";

test("1 / 2 = 0.5", () => {
  expect(divide(1, 2)).toBe(0.5);
});

test("Throws on division by zero", () => {
  expect(() => {
    divide(1, 0);
  }).toThrow();

  expect(() => {
    divide(5, 0);
  }).toThrow("Cannot divide by zero");

  expect(() => {
    divide(10, 0);
  }).toThrow(ZeroDivisionError);
});
