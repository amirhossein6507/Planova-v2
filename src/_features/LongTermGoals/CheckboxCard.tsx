"use client";

import { changeStatusLongTermGoal } from "@/src/_lib/actions";
import { Checkbox } from "@heroui/react";

type CheckboxCardProps = {
  statusChecked: boolean;
  id: number;
};

function CheckboxCard({ statusChecked, id }: CheckboxCardProps) {
  const handleChangeStatus = () => {
    const newStatus = statusChecked ? "active" : "completed";
    changeStatusLongTermGoal(id, newStatus);
  };

  return (
    <Checkbox
      variant="secondary"
      isSelected={statusChecked}
      onChange={handleChangeStatus}
    >
      <Checkbox.Content>
        <Checkbox.Control className="h-5 w-5 bg-zinc-500">
          <Checkbox.Indicator />
        </Checkbox.Control>
      </Checkbox.Content>
    </Checkbox>
  );
}

export default CheckboxCard;
