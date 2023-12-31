import { ExpenseService } from "../../src/services/expenseService";
import { ExpenseController } from "../../src/controllers/expenseController";
import { Mock } from "vitest";
import express from "express";

describe("ExpenseController", () => {
  let controller: ExpenseController;

  let expenseService: Partial<ExpenseService>;
  let req: Partial<express.Request>;
  let res: Partial<express.Response>;
  let next: Mock;

  beforeEach(() => {
    expenseService = {
      getSettlements: vi.fn(),
      addExpense: vi.fn(),
    };
    req = {};
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
      send: vi.fn().mockReturnThis(),
    };
    next = vi.fn();

    controller = new ExpenseController(expenseService as ExpenseService);
  });

  describe("getSettlements", () => {
    it("should return 200 and settlements", () => {
      // Arrange
      const settlements = [{ from: "user1", to: "user2", amount: 1000 }];
      (expenseService.getSettlements as Mock).mockReturnValueOnce(settlements);
      // Act
      req.params = { groupName: "group1" };
      controller.getSettlements(req as express.Request, res as express.Response, next as express.NextFunction);
      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(settlements);
      // Additional assertion
      expect(expenseService.getSettlements).toHaveBeenCalledWith("group1");
    });
  });

  describe("addExpense", () => {
    it("should return 200 and message", () => {
      // Arrange
      const expense = { groupName: "group1", expenseName: "expense1", payer: "user1", amount: 1000 };
      // Act
      req.body = expense;
      controller.addExpense(req as express.Request, res as express.Response, next as express.NextFunction);
      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      // Additional assertion
      expect(expenseService.addExpense).toHaveBeenCalledWith(expense);
    });

    test.each`
      description             | expense                                                                          | expectedMessages
      ${"empty group name"}   | ${{ groupName: "", expenseName: "expense1", payer: "user1", amount: 1000 }}      | ${["group name is required"]}
      ${"empty expense name"} | ${{ groupName: "group1", expenseName: "", payer: "user1", amount: 1000 }}        | ${["expense name is required"]}
      ${"empty payer"}        | ${{ groupName: "group1", expenseName: "expense1", payer: "", amount: 1000 }}     | ${["payer is required"]}
      ${"zero amount"}        | ${{ groupName: "group1", expenseName: "expense1", payer: "user1", amount: 0 }}   | ${["amount must be positive"]}
      ${"negative amount"}    | ${{ groupName: "group1", expenseName: "expense1", payer: "user1", amount: -1 }}  | ${["amount must be positive"]}
      ${"float amount"}       | ${{ groupName: "group1", expenseName: "expense1", payer: "user1", amount: 1.1 }} | ${["amount must be integer"]}
    `("should return error when validation failed: $description", ({ expense, expectedMessages }) => {
      // Arrange
      const errorMessages = expectedMessages;
      // Act
      req.body = expense;
      controller.addExpense(req as express.Request, res as express.Response, next as express.NextFunction);
      // Assert
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(errorMessages);
    });
  });
});
