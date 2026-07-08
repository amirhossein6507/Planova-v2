import DailyItemCard from "@/src/_features/DailyGoals/DailyItemCard";
import DateContainer from "@/src/_features/DailyGoals/DateContainer";
import HeaderDailyGoals from "@/src/_features/DailyGoals/HeaderDailyGoals";
import { getDailyGoals, getDailySteps } from "@/src/_lib/server";

async function Page() {
  const dailyGoals = await getDailyGoals();

  return (
    <div className="space-y-3 pb-20">
      <HeaderDailyGoals />

      <DateContainer date="1404-4-4">
        {dailyGoals.map((goal) => (
          <DailyItemCard key={goal.id} goal={goal} />
        ))}
      </DateContainer>
    </div>
  );
}

export default Page;
