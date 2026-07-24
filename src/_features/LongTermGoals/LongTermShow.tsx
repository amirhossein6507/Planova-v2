import { Button } from "@heroui/react";
import Link from "next/link";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import LongTermShowDate from "./LongTermShowDate";
import LongTermShowDescription from "./LongTermShowDescription";
import LongTermShowHeader from "./LongTermShowHeader";
import LongTermShowSteps from "./LongTermShowSteps";
import LongTermShowTools from "./LongTermShowTools";
import { getCategory, getLongTermSteps } from "@/src/_lib/server";
import { TLongTermGoal } from "@/src/_types/longTermGoalTypes";

type LongTermItemShowProps = {
  goal: TLongTermGoal;
};

async function LongTermItemShow({ goal }: LongTermItemShowProps) {
  const category = await getCategory(goal.categoryId);
  const steps = await getLongTermSteps(goal.id);

  const {
    id,
    title,
    description,
    priority,
    reminingDays,
    startDate,
    endDate,
    status,
  } = goal;

  return (
    <div className="font-iran-sans flex flex-col gap-3 pb-30">
      <div>
        <Link href="/home/long-term">
          <Button size="sm">
            <HiMiniArrowUturnLeft />
            Back To Goals
          </Button>
        </Link>
      </div>

      <LongTermShowDate
        startDate={startDate!}
        endDate={endDate!}
        reminingDays={reminingDays!}
      />

      <LongTermShowHeader
        title={title}
        priority={priority!}
        category={category}
      />

      {description && <LongTermShowDescription description={description} />}

      {steps.length !== 0 && <LongTermShowSteps steps={steps} />}

      <LongTermShowTools status={status} taskId={id} />
    </div>
  );
}

export default LongTermItemShow;
