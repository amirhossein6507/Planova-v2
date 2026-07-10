"use client";

import { changeStatusStpeDailyGoal } from "@/src/_lib/actions";
import { TDailyGoalStep } from "@/src/_types/dailyGoalsTypes";
import { Checkbox } from "@heroui/react";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

type DailyItemCardContentProps = {
  description: string | undefined | null;
  steps: TDailyGoalStep[];
};

function DailyItemCardContent({
  description,
  steps,
}: DailyItemCardContentProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  if (steps.length === 0 && !description) return null;

  return (
    <div className="flex w-full items-start justify-between">
      <div className="w-[93%]">
        {description && (
          <p
            className={`text-sm leading-7 text-white ${open ? "text-expand mb-2" : "text-collaps"}`}
            style={{ whiteSpace: open ? "pre-line" : "nowrap" }}
          >
            {description}
          </p>
        )}

        {open && steps.length !== 0 && (
          <ul className="bg-black-900 flex flex-col gap-2 rounded-xl p-3">
            {steps
              .sort((a, b) => a.order - b.order)
              .map((step) => (
                <li key={step.id}>
                  <Checkbox
                    aria-label="change-status-step"
                    isSelected={step.status}
                    onClick={() =>
                      changeStatusStpeDailyGoal(step.id!, !step.status)
                    }
                  >
                    <Checkbox.Content>
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      {step.step}
                    </Checkbox.Content>
                  </Checkbox>
                </li>
              ))}
          </ul>
        )}
      </div>
      <button onClick={handleOpen} className="px-1 py-2">
        {open ? <HiChevronUp /> : <HiChevronDown />}
      </button>
    </div>
  );
}

export default DailyItemCardContent;
