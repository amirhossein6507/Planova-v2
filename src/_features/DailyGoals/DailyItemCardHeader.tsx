import { timeFormat } from "@/src/_utils/timeAndDate";
import DropDownItems from "../../_ui/DropDownItems";
import DailyItemStatus from "./DailyItemStatus";
import { getDailyGoal, getDailySteps } from "@/src/_lib/server";
import { TCategory } from "@/src/_types/dailyGoalsTypes";

type DailyItemCardHeaderProps = {
  id: number;
  title: string;
  category: string;
  startTime: string | null | undefined;
  endTime: string | null | undefined;
  status: string;
  categories: TCategory[];
};

async function DailyItemCardHeader({
  id,
  title,
  category,
  startTime,
  endTime,
  status,
  categories,
}: DailyItemCardHeaderProps) {
  const dailyGoal = await getDailyGoal(id);
  const steps = await getDailySteps(id);

  const statusChecked = status === "active" ? false : true;
  const startTimeFormated = timeFormat(startTime!);
  const endTimeFormated = timeFormat(endTime!);

  return (
    <div className="mb-1 flex items-center justify-between">
      <div className="flex w-[75%] items-center gap-2 bg-blue-300/0 md:w-[85%]">
        <DailyItemStatus statusChecked={statusChecked} id={id} />

        <p className="bg-turquoise text-black-950 h-fit rounded-full px-2 text-sm">
          {category}
        </p>

        <h3 className="text-turquoise overflow-hidden bg-amber-300/0 text-lg text-ellipsis">
          {title}
        </h3>
      </div>

      <div className="flex items-center gap-1 bg-red-400/0">
        <div className="flex items-center gap-1.5 text-xs text-zinc-300">
          {startTimeFormated && <span>{startTimeFormated}</span>}
          {endTimeFormated && (
            <span className="text-red-300">{endTimeFormated}</span>
          )}
        </div>

        <span>
          <DropDownItems
            dailyId={id}
            categories={categories}
            dailyGoal={dailyGoal}
            steps={steps}
          />
        </span>
      </div>
    </div>
  );
}

export default DailyItemCardHeader;
