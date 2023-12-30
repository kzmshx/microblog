import { ExpenseRepository } from "../../src/repositories/expenseRepository";
import { Expense } from "../../src/type";

const mockFs = vi.hoisted(() => ({
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
  writeFileSync: vi.fn(),
}));
vi.mock("fs", async () => {
  return {
    default: {
      ...(await vi.importActual("fs")),
      ...mockFs,
    },
  };
});

describe("ExpenseRepository", () => {
  beforeEach(() => {
    mockFs.existsSync.mockClear();
    mockFs.readFileSync.mockClear();
    mockFs.writeFileSync.mockClear();
  });

  describe("findAll", () => {
    it("should return empty array when file does not exist", () => {
      // Arrange
      mockFs.existsSync.mockReturnValueOnce(false);
      const repo = new ExpenseRepository("expense.json");
      // Act
      const actual = repo.findAll();
      // Assert
      expect(actual).toEqual([]);
    });

    it("should return expenses when file exists", () => {
      // Arrange
      const expenses: Expense[] = [
        { groupName: "group1", expenseName: "expense1", payer: "Sam", amount: 1000 },
        { groupName: "group2", expenseName: "expense2", payer: "Tom", amount: 2000 },
      ];
      const mockData = JSON.stringify(expenses);
      mockFs.existsSync.mockReturnValueOnce(true);
      mockFs.readFileSync.mockReturnValueOnce(mockData);
      const repo = new ExpenseRepository("expense.json");
      // Act
      const actual = repo.findAll();
      // Assert
      expect(actual).toEqual(expenses);
    });
  });

  describe("save", () => {
    it("should save expense", () => {
      // Arrange
      mockFs.existsSync.mockReturnValueOnce(true);
      mockFs.readFileSync.mockReturnValueOnce(JSON.stringify([]));
      const repo = new ExpenseRepository("expense.json");
    });
  });
});
