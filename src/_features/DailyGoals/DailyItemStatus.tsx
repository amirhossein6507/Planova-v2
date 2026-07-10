"use client";

import { changeStatusDailyGoal } from "@/src/_lib/actions";
import { Checkbox } from "@heroui/react";

function DailyItemStatus({
  statusChecked,
  id,
}: {
  statusChecked: boolean;
  id: number;
}) {
  const handleChangeStatus = () => {
    const newStatus = statusChecked ? "active" : "completed";
    changeStatusDailyGoal(id, newStatus);
  };

  return (
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
  );
}

export default DailyItemStatus;
