import DailyItemCard from "@/src/_features/DailyGoals/DailyItemCard";
import DateContainer from "@/src/_features/DailyGoals/DateContainer";
import HeaderDailyGoals from "@/src/_features/DailyGoals/HeaderDailyGoals";
import { getDailyGoals } from "@/src/_lib/server";
import EmptyPage from "@/src/_ui/EmptyPage";

async function Page() {
  const dailyGoals = await getDailyGoals();
  const uniqueDate = new Set();

  const allDate = dailyGoals
    ?.map((goal) => {
      return { id: goal.id, date: goal.date };
    })
    .filter((item) => {
      if (uniqueDate.has(item.date)) return false;
      uniqueDate.add(item.date);
      return true;
    });

  // console.log(dailyGoals);

  return (
    <div className="space-y-3 pb-20">
      <HeaderDailyGoals />

      {dailyGoals.length !== 0 ? (
        allDate
          .sort((a, b) => a.id - b.id)
          .map((date) => (
            <DateContainer key={date.id} date={date.date}>
              {dailyGoals.map((goal) =>
                date.date === goal.date ? (
                  <DailyItemCard key={goal.id} goal={goal} />
                ) : null,
              )}
            </DateContainer>
          ))
      ) : (
        <EmptyPage message="you don't have task" />
      )}
    </div>
  );
}

export default Page;
