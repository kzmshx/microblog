import { Calculator } from "./mock";

describe("Mocking", () => {
  describe("jest.fn()", () => {
    test("jest.fn()", () => {
      const mockFn = jest.fn(() => "Hello, mock!");

      expect(mockFn()).toBe("Hello, mock!");
    });

    test("jest.fn().mockImplementation()", () => {
      const mockFn = jest.fn();
      mockFn.mockImplementation(() => "Hello, mock!");

      expect(mockFn()).toBe("Hello, mock!");
    });

    test("jest.fn().mockReturnValue()", () => {
      const mockFn = jest.fn();
      mockFn.mockReturnValue("return_value");

      expect(mockFn()).toBe("return_value");
      expect(mockFn()).toBe("return_value");
    });

    test("jest.fn().mockReturnValueOnce()", () => {
      const mockFn = jest.fn();
      mockFn.mockReturnValueOnce("return_value_once");

      expect(mockFn()).toBe("return_value_once");
      expect(mockFn()).toBeUndefined();
    });

    test("jest.fn().mockResolvedValue()", async () => {
      const mockFn = jest.fn();
      mockFn.mockResolvedValue("resolved_value");

      await expect(mockFn()).resolves.toBe("resolved_value");
    });

    test("jest.fn().mockRejectedValue()", async () => {
      const mockFn = jest.fn();
      mockFn.mockRejectedValue("rejected_value");

      await expect(mockFn()).rejects.toBe("rejected_value");
    });

    test("expect(mockFn).toHaveBeenCalled()", () => {
      const mockFn = jest.fn();
      mockFn();

      expect(mockFn).toHaveBeenCalled();
    });

    test("expect(mockFn).toHaveBeenCalledTimes()", () => {
      const mockFn = jest.fn();
      mockFn();
      mockFn();

      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    test("expect(mockFn).toHaveBeenCalledWith()", () => {
      const mockFn = jest.fn();
      mockFn("Hello", "World");

      expect(mockFn).toHaveBeenCalledWith("Hello", "World");
    });
  });

  describe("jest.spyOn()", () => {
    test.each`
      n    | expectedResult | expectedCalls
      ${1} | ${1}           | ${1}
      ${2} | ${1}           | ${1}
      ${3} | ${2}           | ${3}
    `("jest.spyOn()", ({ n, expectedResult, expectedCalls }) => {
      const calculator = new Calculator();
      const spy = jest.spyOn(calculator, "fib");

      expect(calculator.fib(n)).toBe(expectedResult);
      expect(spy).toHaveBeenCalledTimes(expectedCalls);

      spy.mockRestore();
    });
  });
});
