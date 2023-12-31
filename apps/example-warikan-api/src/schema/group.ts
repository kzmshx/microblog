import { z } from "zod";

export const groupSchema = z
  .object({
    name: z.string().min(1, "group name is required"),
    members: z
      .array(z.string())
      .min(2, "group must have at least 2 members")
      .refine((value) => value.length === new Set(value).size, {
        message: "member names must be unique",
      }),
  })
  .strict();

export type GroupSchema = z.infer<typeof groupSchema>;
