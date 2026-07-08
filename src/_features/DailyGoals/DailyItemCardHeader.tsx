"use client";

import { Checkbox } from "@heroui/react";
import DropDownItems from "../../_ui/DropDownItems";

type DailyItemCardHeaderProps = {
  title: string;
  category: string;
  startTime?: string;
  endTime?: string;
  status: string;
};

function DailyItemCardHeader({
  title,
  category,
  startTime,
  endTime,
  status,
}: DailyItemCardHeaderProps) {
  const statusChecked = status === "active" ? false : true;

  const startTimeFormated = startTime.split(":").slice(0, 2).join(":");
  const endTimeFormated = endTime.split(":").slice(0, 2).join(":");

  const handleChangeStatus = () => {
    console.log("test");
  };

  return (
    <div className="mb-1 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span>
          <Checkbox
            variant="secondary"
            isSelected={statusChecked}
            onClick={handleChangeStatus}
            aria-label="change-status-card"
          >
            <Checkbox.Content>
              <Checkbox.Control className="h-5 w-5 bg-zinc-500">
                <Checkbox.Indicator />
              </Checkbox.Control>
            </Checkbox.Content>
          </Checkbox>
        </span>
        <p className="bg-turquoise text-black-950 h-fit rounded-full px-2 text-sm">
          {category}
        </p>
        <h3 className="text-turquoise text-lg">{title}</h3>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-0.5 text-xs text-zinc-300">
          <span>{startTimeFormated}</span>
          <span>-</span>
          <span className="text-red-300">{endTimeFormated}</span>
        </div>
        <span>
          <DropDownItems />
        </span>
      </div>
    </div>
  );
}

export default DailyItemCardHeader;
