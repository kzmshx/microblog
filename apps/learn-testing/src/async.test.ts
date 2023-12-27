import { delay } from "./async";

describe("delay", () => {
  it("should return message after delay", async () => {
    const message = await delay("Hello", 100);
    expect(message).toBe("Hello");
  });
  it("should return message after delay with .resolves", async () => {
    await expect(delay("Hello", 100)).resolves.toBe("Hello");
  });

  it("should throw error on negative delay", async () => {
    expect.assertions(1);
    try {
      await delay("Hello", -100);
    } catch (e) {
      expect(e).toBe("Time cannot be negative");
    }
  });
  it("should throw error on negative delay with .rejects", async () => {
    await expect(delay("Hello", -100)).rejects.toBe("Time cannot be negative");
  });
});
