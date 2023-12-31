import { GroupService } from "../../src/services/groupService";
import { ExpenseService } from "../../src/services/expenseService";
import { ExpenseRepository } from "../../src/repositories/expenseRepository";
import { beforeEach, expect, Mock, vi } from "vitest";
import { Expense, Group } from "../../src/type";

describe("ExpenseService", () => {
  let expenseService: ExpenseService;

  let expenseRepositoryMock: Partial<ExpenseRepository>;
  let groupServiceMock: Partial<GroupService>;

  const group: Group = {
    name: "Hokkaido Trip",
    members: ["Alice", "Bob", "Carol"],
  };

  const expenses: Expense[] = [
    { groupName: "Hokkaido Trip", expenseName: "Lunch", payer: "Alice", amount: 1200 },
    { groupName: "Hokkaido Trip", expenseName: "Dinner", payer: "Bob", amount: 2400 },
  ];

  beforeEach(() => {
    expenseRepositoryMock = {
      findAll: vi.fn(),
      save: vi.fn(),
    };
    groupServiceMock = {
      getGroupByName: vi.fn(),
    };
    expenseService = new ExpenseService(expenseRepositoryMock as ExpenseRepository, groupServiceMock as GroupService);
  });

  describe("getSettlements", () => {
    it("should return settlements", () => {
      // Arrange
      (groupServiceMock.getGroupByName as Mock).mockReturnValueOnce(group);
      (expenseRepositoryMock.findAll as Mock).mockReturnValueOnce(expenses);
      // Act
      const settlements = expenseService.getSettlements("Hokkaido Trip");
      // Assert
      expect(settlements).toEqual([{ from: "Carol", to: "Bob", amount: 1200 }]);
    });

    it("should throw error when group does not exist", () => {
      // Arrange
      (groupServiceMock.getGroupByName as Mock).mockReturnValueOnce(undefined);
      // Act & Assert
      expect(() => expenseService.getSettlements("Kagawa Trip")).toThrow("グループ： Kagawa Trip が存在しません");
    });
  });

  describe("addExpense", () => {
    it("should add expense", () => {
      // Arrange
      (groupServiceMock.getGroupByName as Mock).mockReturnValueOnce(group);
      // Act
      expenseService.addExpense(expenses[0]);
      // Assert
      expect(expenseRepositoryMock.save).toHaveBeenCalledTimes(1);
      expect(expenseRepositoryMock.save).toHaveBeenCalledWith(expenses[0]);
    });

    it("should throw error when group does not exist", () => {
      // Arrange
      (groupServiceMock.getGroupByName as Mock).mockReturnValueOnce(undefined);
      // Act & Assert
      expect(() => expenseService.addExpense(expenses[0])).toThrow("グループ： Hokkaido Trip が存在しません");
    });

    it("should throw error when payer is not a member of the group", () => {
      // Arrange
      (groupServiceMock.getGroupByName as Mock).mockReturnValueOnce(group);
      // Act & Assert
      const invalidExpense = { ...expenses[0], payer: "Dave" };
      expect(() => expenseService.addExpense(invalidExpense)).toThrow("支払い者がメンバーの中にいません");
    });
  });
});
