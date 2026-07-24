import LongTermItemShow from "@/src/_features/LongTermGoals/LongTermShow";
import { getLongTermGoal } from "@/src/_lib/server";

type Props = {
  params: Promise<{ longTermId: number }>;
};

async function Page({ params }: Props) {
  const { longTermId } = await params;

  const longTermGoal = await getLongTermGoal(longTermId);

  return <LongTermItemShow goal={longTermGoal} />;
}

export default Page;
