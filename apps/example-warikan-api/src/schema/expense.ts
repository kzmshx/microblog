import { z } from "zod";

export const expenseSchema = z
  .object({
    groupName: z.string().min(1, "group name is required"),
    expenseName: z.string().min(1, "expense name is required"),
    payer: z.string().min(1, "payer is required"),
    amount: z.coerce.number().int("amount must be integer").min(1, "amount must be positive"),
  })
  .strict();

export type ExpenseSchema = z.infer<typeof expenseSchema>;
