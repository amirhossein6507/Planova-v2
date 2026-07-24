import * as z from "zod";

export const LongTermGoalSchame = z.object({
  id: z.coerce.number().readonly(),
  created_at: z.date().or(z.string()).readonly(),
  title: z.string(),
  description: z.string().or(z.null()).optional(),
  status: z.string(),
  priority: z.string().or(z.null()).optional(),
  startDate: z.string(),
  endDate: z.string().or(z.null()).optional(),
  reminingDays: z.number().or(z.null()).optional(),
  categoryId: z.number().readonly(),
  userId: z.number().readonly(),
});
export type TLongTermGoal = z.infer<typeof LongTermGoalSchame>;

export const LongTermGoalStepSchame = z.object({
  id: z.coerce.number().readonly().optional(),
  created_at: z.date().or(z.string()).readonly().optional(),
  step: z.string(),
  status: z.boolean(),
  order: z.number(),
  longTermGoalId: z.number().readonly().optional(),
});
export type TLongTermGoalStep = z.infer<typeof LongTermGoalStepSchame>;
