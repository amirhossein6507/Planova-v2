"use client";

import { Checkbox } from "@heroui/react";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

type DailyItemCardContentProps = {
  description: string;
  steps: any[];
};

function DailyItemCardContent({
  description,
  steps,
}: DailyItemCardContentProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  return (
    <div className="flex w-full items-start justify-between">
      <div className="w-[93%]">
        <p
          className={`text-sm leading-7 text-white ${open ? "text-expand mb-2" : "text-collaps"}`}
          style={{ whiteSpace: open ? "pre-line" : "nowrap" }}
        >
          {description}
        </p>

        {open && (
          <ul className="bg-black-900 flex flex-col gap-2 rounded-xl p-3">
            {steps.map((step) => (
              <li key={step.id}>
                <Checkbox
                  aria-label="change-status-step"
                  isSelected={step.status}
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
