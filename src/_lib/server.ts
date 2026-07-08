import { supabase } from "./supabase";

export const getDailyGoals = async () => {
  const { data, error } = await supabase.from("daily").select("*");

  if (error) throw new Error("message error: " + error);

  return data;
};

export const getDailySteps = async (dailyId: number) => {
  const { data, error } = await supabase
    .from("daily_steps")
    .select("*")
    .eq("dailyGoalId", dailyId);

  if (error) throw error;

  return data;
};
