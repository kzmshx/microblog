import fs from "fs";
import { Expense } from "../type";

export class ExpenseRepository {
  constructor(private readonly filePath: string) {}

  findAll(): Expense[] {
    if (!fs.existsSync(this.filePath)) {
      return [];
    }

    const data = fs.readFileSync(this.filePath, "utf8");
    return JSON.parse(data);
  }

  save(expense: Expense): void {
    const expenses = this.findAll();
    expenses.push(expense);
    fs.writeFileSync(this.filePath, JSON.stringify(expenses));
  }
}
