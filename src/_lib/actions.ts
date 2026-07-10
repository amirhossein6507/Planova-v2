"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { TDailyGoalStep } from "../_types/dailyGoalsTypes";

// DAILY GOALS ACTIONS
export const createDailyGoal = async (formData: FormData) => {
  const newTask = {
    title: formData.get("title"),
    description: formData.get("description"),
    status: "active",
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime") || null,
    date: formData.get("date"),
    categoryId: Number(formData.get("category")),
    userId: 1,
  };

  const newSteps = JSON.parse(formData.get("steps") as string);

  const { data, error } = await supabase
    .from("daily")
    .insert([newTask])
    .select()
    .single();

  if (newSteps) {
    const newStepsWithDailyGoalId = newSteps.map((item: TDailyGoalStep) => {
      return { ...item, dailyGoalId: data.id };
    });

    const { error: errorSteps } = await supabase
      .from("daily_steps")
      .insert(newStepsWithDailyGoalId);

    if (errorSteps) throw new Error(errorSteps.message);
  }

  if (error) throw new Error(error.message);

  revalidatePath("/home/daily");
};

export const changeStatusDailyGoal = async (id: number, newStatus: string) => {
  const { error } = await supabase
    .from("daily")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/home/daily");
};

export const changeStatusStpeDailyGoal = async (
  id: number,
  newStatus: boolean,
) => {
  const { error } = await supabase
    .from("daily_steps")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/home/daily");
};

export const editDailyGoal = async (id: number, formData: FormData) => {
  const newTask = {
    title: formData.get("title"),
    description: formData.get("description"),
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime") || null,
    categoryId: Number(formData.get("category")),
    userId: 1,
  };

  const newSteps = JSON.parse(formData.get("steps") as string) || null;

  const { data, error }: { data: any; error: any } = await supabase
    .from("daily")
    .update(newTask)
    .eq("id", id);

  const { error: deleteError } = await supabase
    .from("daily_steps")
    .delete()
    .eq("dailyGoalId", id);

  if (deleteError) throw new Error(deleteError.message);

  if (newSteps) {
    const stepsToInsert = newSteps.map((step: TDailyGoalStep) => ({
      step: step.step,
      status: step.status,
      order: step.order,
      dailyGoalId: id,
    }));

    const { error: insertError } = await supabase
      .from("daily_steps")
      .insert(stepsToInsert);

    if (insertError) throw new Error(insertError.message);
  }

  if (error) throw new Error(error.message);

  revalidatePath("/home/daily");
};

export const deleteDailyGoal = async (id: number) => {
  const { error: errorSteps } = await supabase
    .from("daily_steps")
    .delete()
    .eq("dailyGoalId", id);
  const { error } = await supabase.from("daily").delete().eq("id", id);

  if (error) throw new Error(error.message);
  if (errorSteps) throw new Error(errorSteps.message);

  revalidatePath("/home/daily");
};
