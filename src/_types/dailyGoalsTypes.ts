import * as z from "zod";

export const DailyGoalSchame = z.object({
  id: z.coerce.number().readonly(),
  created_at: z.date().or(z.string()).readonly(),
  title: z.string(),
  description: z.string().optional(),
  status: z.string(),
  startTime: z.string().or(z.null()).optional(),
  endTime: z.string().or(z.null()).optional(),
  date: z.string(),
  categoryId: z.number().readonly(),
  userId: z.number().readonly(),
});
export type TDailyGoal = z.infer<typeof DailyGoalSchame>;

export const DailyGoalStepSchame = z.object({
  id: z.coerce.number().readonly().optional(),
  created_at: z.date().or(z.string()).readonly().optional(),
  step: z.string(),
  status: z.boolean(),
  order: z.number(),
  dailyGoalId: z.number().readonly().optional(),
});
export type TDailyGoalStep = z.infer<typeof DailyGoalStepSchame>;

export const CategorySchame = z.object({
  id: z.coerce.number().readonly(),
  created_at: z.date().or(z.string()).readonly(),
  name: z.string(),
  icon: z.unknown().optional(),
  color: z.string().or(z.null()).optional(),
  userId: z.number().readonly(),
});
export type TCategory = z.infer<typeof CategorySchame>;
