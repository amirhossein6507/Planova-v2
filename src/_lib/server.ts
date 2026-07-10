import {
  CategorySchame,
  DailyGoalSchame,
  DailyGoalStepSchame,
} from "@/src/_types/dailyGoalsTypes";
import { supabase } from "./supabase";
import * as z from "zod";

export const getDailyGoals = async () => {
  const { data, error } = await supabase.from("daily").select("*");

  if (error) throw new Error("message error: " + error);

  const dailyGoals = z.array(DailyGoalSchame).parse(data);

  return dailyGoals;
};

export const getDailyGoal = async (id: number) => {
  const { data, error } = await supabase
    .from("daily")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  const dailyGoal = DailyGoalSchame.parse(data);

  return dailyGoal;
};

export const getDailySteps = async (dailyId: number) => {
  const { data, error } = await supabase
    .from("daily_steps")
    .select("*")
    .eq("dailyGoalId", dailyId);

  if (error) throw new Error(error.message);

  const dailySteps = z.array(DailyGoalStepSchame).parse(data);

  return dailySteps;
};

export const getCategories = async (userId: number) => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("userId", userId);

  if (error) throw new Error(error.message);

  const categories = z.array(CategorySchame).parse(data);

  return categories;
};

export const getCategory = async (id: number) => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  const category = CategorySchame.parse(data);

  return category;
};
