import express from "express";
import { createApp } from "../../src/app";
import fs from "fs";
import { Expense, Group } from "../../src/type";
import request from "supertest";
import path from "node:path";
import { expect } from "vitest";

const TESTDATA_DIR = path.join(__dirname, "testdata");
const GROUPS_PATH = path.join(TESTDATA_DIR, "groups.json");
const EXPENSES_PATH = path.join(TESTDATA_DIR, "expenses.json");

describe("Integration", () => {
  let app: express.Express;

  const groups: Group[] = [
    { name: "group1", members: ["Alice", "Bob", "Carol"] },
    { name: "group2", members: ["Mike", "Nancy"] },
  ];
  const expenses: Expense[] = [
    { groupName: "group1", expenseName: "Lunch", payer: "Alice", amount: 1200 },
    { groupName: "group2", expenseName: "Dinner", payer: "Mike", amount: 3000 },
  ];

  beforeEach(() => {
    fs.writeFileSync(GROUPS_PATH, JSON.stringify(groups));
    fs.writeFileSync(EXPENSES_PATH, JSON.stringify(expenses));

    app = createApp(GROUPS_PATH, EXPENSES_PATH);
  });

  describe("Groups", () => {
    describe("GET /groups", () => {
      test("200 OK", async () => {
        // Act
        const response = await request(app).get("/groups");
        // Assert
        expect(response.status).toBe(200);
      });
    });
    describe("GET /groups/:name", () => {
      test("200 OK", async () => {
        // Act
        const response = await request(app).get("/groups/group1");
        // Assert
        expect(response.status).toBe(200);
      });

      test("404 NotFound: group not found", async () => {
        // Act
        const response = await request(app).get("/groups/group3");
        // Assert
        expect(response.status).toBe(404);
      });
    });
    describe("POST /groups", () => {
      test("200 OK", async () => {
        // Arrange
        const newGroup = { name: "group3", members: ["Dave", "Eve"] };
        // Act
        const response = await request(app).post("/groups").send(newGroup);
        // Assert
        expect(response.status).toBe(200);
      });

      it("400 BadRequest: group name is already used", async () => {
        // Arrange
        const newGroup = { name: "group1", members: ["Dave", "Eve"] };
        // Act
        const response = await request(app).post("/groups").send(newGroup);
        // Assert
        expect(response.status).toBe(400);
        expect(response.text).toBe("group name is already used");
      });

      it("400 BadRequest: invalid request body", async () => {
        // Arrange
        const newGroup = { name: "group3", members: ["Dave"] };
        // Act
        const response = await request(app).post("/groups").send(newGroup);
        // Assert
        expect(response.status).toBe(400);
        expect(response.text).toBe(JSON.stringify(["group must have at least 2 members"]));
      });
    });
  });

  describe("Expenses", () => {
    describe("POST /expenses", () => {
      it("200 OK", async () => {
        // Arrange
        const newExpense = { groupName: "group1", expenseName: "Dinner", payer: "Alice", amount: 3000 };
        // Act
        const response = await request(app).post("/expenses").send(newExpense);
        // Assert
        expect(response.status).toBe(200);
      });

      it("400 BadRequest: invalid request body", async () => {
        // Arrange
        const newExpense = { groupName: "group1", expenseName: "Dinner", payer: "Alice", amount: -3000 };
        // Act
        const response = await request(app).post("/expenses").send(newExpense);
        // Assert
        expect(response.status).toBe(400);
        expect(response.text).toBe(JSON.stringify(["amount must be positive"]));
      });

      it("500 InternalServerError: group not found", async () => {
        // Arrange
        const newExpense = { groupName: "group3", expenseName: "Dinner", payer: "Alice", amount: 3000 };
        // Act
        const response = await request(app).post("/expenses").send(newExpense);
        // Assert
        expect(response.status).toBe(500);
      });
    });
  });

  describe("Settlements", () => {
    describe("GET /settlements/:groupName", () => {
      it("200 OK", async () => {
        // Act
        const response = await request(app).get("/settlements/group1");
        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
          { from: "Bob", to: "Alice", amount: 400 },
          { from: "Carol", to: "Alice", amount: 400 },
        ]);
      });

      it("500 NotFound: group not found", async () => {
        // Act
        const response = await request(app).get("/settlements/group3");
        // Assert
        expect(response.status).toBe(500);
      });
    });
  });
});
