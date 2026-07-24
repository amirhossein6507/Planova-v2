import HeaderGoalsPage from "@/src/_ui/HeaderGoalsPage";
import LongTermItemCard from "@/src/_features/LongTermGoals/LongTermItemCard";
import { getLongTermGoals } from "@/src/_lib/server";

async function Page() {
  const longTermGoals = await getLongTermGoals();

  return (
    <div className="space-y-3 pb-20">
      <HeaderGoalsPage typeGoals="long-term" />

      {longTermGoals.map((goal) => (
        <LongTermItemCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
}

export default Page;
