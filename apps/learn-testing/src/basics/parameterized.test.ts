describe("sum", () => {
  test.each`
    a     | b     | expected
    ${1}  | ${2}  | ${3}
    ${2}  | ${2}  | ${4}
    ${3}  | ${2}  | ${5}
    ${-1} | ${-2} | ${-3}
  `("sum($a, $b) = $expected (template literal)", ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
  });

  test.each([
    [1, 2, 3],
    [2, 2, 4],
    [3, 2, 5],
    [-1, -2, -3],
  ])("sum(%i, %i) = %i (array)", (a, b, expected) => {
    expect(a + b).toBe(expected);
  });

  test.each([
    { a: 1, b: 2, expected: 3 },
    { a: 2, b: 2, expected: 4 },
    { a: 3, b: 2, expected: 5 },
    { a: -1, b: -2, expected: -3 },
  ])("sum($a, $b) = $expected (object)", ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
  });
});
