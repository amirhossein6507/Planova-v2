import DailyItemCard from "@/src/_features/DailyGoals/DailyItemCard";
import { getDailyGoalsArchive } from "@/src/_lib/server";
import { TDailyGoal } from "@/src/_types/dailyGoalsTypes";
import EmptyPage from "@/src/_ui/EmptyPage";

async function Page() {
  const dailyGoalsArchived = await getDailyGoalsArchive();

  console.log(dailyGoalsArchived);

  return (
    <div className="flex flex-col gap-3 p-5">
      {dailyGoalsArchived.length !== 0 ? (
        dailyGoalsArchived?.map((goal: TDailyGoal) => {
          return <DailyItemCard goal={goal} key={goal.id} />;
        })
      ) : (
        <EmptyPage />
      )}
    </div>
  );
}

export default Page;
