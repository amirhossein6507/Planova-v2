import { TCategory } from "@/src/_types/dailyGoalsTypes";
import React from "react";
import {
  HiMiniChevronDoubleDown,
  HiMiniChevronDoubleUp,
  HiMiniChevronUpDown,
} from "react-icons/hi2";

type LongTermShowHeaderProps = {
  title: string;
  priority: string;
  category: TCategory;
};

function LongTermShowHeader({
  priority,
  title,
  category,
}: LongTermShowHeaderProps) {
  return (
    <>
      <h3 className="text-turquoise text-center text-2xl font-bold">{title}</h3>

      <span className="text-black-900 mx-auto w-fit rounded-full bg-teal-400 px-2">
        {category.name}
      </span>

      <div className="flex flex-col">
        {priority === "high" && (
          <span className="font-main flex items-center gap-1">
            <HiMiniChevronDoubleUp size={20} color="#22dd22" />
            This goal is a
            <span className="text-black-900 bg-green-400 px-1 font-semibold">
              {priority}
            </span>
            priority.
          </span>
        )}

        {priority === "medium" && (
          <span className="font-main flex items-center gap-1">
            <HiMiniChevronUpDown size={20} color="#fff94f" />
            This goal is a
            <span className="text-black-900 bg-amber-300 px-1 font-semibold">
              {priority}
            </span>
            priority.
          </span>
        )}

        {priority === "low" && (
          <span className="font-main flex items-center gap-1">
            <HiMiniChevronDoubleDown size={20} color="#ff5353" />
            This goal is a
            <span className="text-black-900 bg-red-400 px-1 font-semibold">
              {priority}
            </span>
            priority.
          </span>
        )}
      </div>
    </>
  );
}

export default LongTermShowHeader;
