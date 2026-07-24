import { getCategory } from "@/src/_lib/server";
import Link from "next/link";
import Checkbox from "./CheckboxCard";
import { TLongTermGoal } from "@/src/_types/longTermGoalTypes";

type LongTermItemCardProps = {
  goal: TLongTermGoal;
};

async function LongTermItemCard({ goal }: LongTermItemCardProps) {
  const category = await getCategory(goal.categoryId);

  const { id, title, status, reminingDays, startDate, priority } = goal;
  const { name: categoryName, color: categoryColor } = category;

  const statusChecked = status !== "active";

  return (
    <Link href={`/home/long-term/${id}`} className="block">
      <div className="bg-black-950 rtl font-iran-sans flex items-start justify-between gap-2 rounded-2xl p-3">
        <div className="flex w-25 flex-col items-start gap-1.5">
          <p
            className="h-fit max-w-25 overflow-hidden rounded-full px-2 py-0.5 text-[13px] text-nowrap text-ellipsis text-white"
            style={{
              backgroundColor: categoryColor
                ? categoryColor
                : "var(--color-turquoise)",
            }}
          >
            {categoryName}
          </p>
          {priority && (
            <p
              className={`border-turquoise h-fit w-fit rounded-full border px-2 text-[13px] font-bold ${priority == "high" ? "text-green-400" : ""} ${priority == "medium" ? "text-amber-400" : ""} ${priority == "low" ? "text-red-400" : ""} `}
            >
              {priority}
            </p>
          )}
        </div>

        <div className="flex-1 pt-1.5">
          <h3 className="overflow-hidden bg-amber-300/0 text-center text-lg text-ellipsis text-white">
            {title}
          </h3>
        </div>

        <div className="flex w-20 flex-col items-end gap-1.5">
          <Checkbox statusChecked={statusChecked} id={id} />

          <div className="ltr flex flex-col text-xs">
            {reminingDays ? (
              <>
                <span>{reminingDays} Days</span>
                <span className="text-teal-400">Remaining</span>
              </>
            ) : (
              <span className="text-teal-400">{startDate}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LongTermItemCard;
