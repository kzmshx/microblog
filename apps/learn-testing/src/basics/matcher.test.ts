test("Numbers", () => {
  expect(2 + 2).toBe(4);
});

test("Strings", () => {
  expect("Hello" + " " + "World").toBe("Hello World");
});

test("Booleans", () => {
  expect(true).toBe(true);
});

test("Arrays", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

test("Objects", () => {
  expect({ foo: "bar" }).toEqual({ foo: "bar" });
});

test("2 + 2 != 5", () => {
  expect(2 + 2).not.toBe(5);
});
