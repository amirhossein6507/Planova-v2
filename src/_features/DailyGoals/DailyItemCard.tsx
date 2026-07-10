import { getCategories, getCategory, getDailySteps } from "@/src/_lib/server";
import DailyItemCardContent from "./DailyItemCardContent";
import DailyItemCardHeader from "./DailyItemCardHeader";
import { TDailyGoal } from "@/src/_types/dailyGoalsTypes";

type DailyItemCardProps = {
  goal: TDailyGoal;
};

async function DailyItemCard({ goal }: DailyItemCardProps) {
  const { title, description, startTime, endTime, status, id, categoryId } =
    goal;

  const [steps, categories, category] = await Promise.all([
    getDailySteps(id),
    getCategories(1),
    getCategory(categoryId),
  ]);

  return (
    <div
      className={`bg-black-950 rtl font-iran-sans rounded-3xl p-3 ${status === "completed" ? "opacity-50" : ""}`}
    >
      <DailyItemCardHeader
        id={id}
        title={title}
        startTime={startTime}
        endTime={endTime}
        category="شخصی"
        status={status}
        categories={categories}
      />
      <DailyItemCardContent description={description} steps={steps} />
    </div>
  );
}

export default DailyItemCard;
