"use client";

import { deleteLongTermGoal } from "@/src/_lib/actions";
import { Button } from "@heroui/react";
import { FiCheckCircle } from "react-icons/fi";
import {
  HiArchiveBoxArrowDown,
  HiCheck,
  HiPencil,
  HiTrash,
} from "react-icons/hi2";

type LongTermShowToolsProps = {
  status: string;
  taskId: number;
};

function LongTermShowTools({ status, taskId }: LongTermShowToolsProps) {
  const isCompleted = status === "completed";

  return (
    <>
      <div className="mx-auto flex w-fit gap-4 rounded-full border border-teal-400 p-1.5">
        <Button
          size="sm"
          isIconOnly
          isDisabled={isCompleted}
          className="bg-green-400"
        >
          <FiCheckCircle />
        </Button>

        <Button size="sm" isIconOnly className="bg-indigo-500">
          <HiPencil />
        </Button>

        <Button size="sm" isIconOnly className="bg-amber-500">
          <HiArchiveBoxArrowDown />
        </Button>

        <Button
          onClick={() => deleteLongTermGoal(taskId)}
          size="sm"
          isIconOnly
          variant="danger"
        >
          <HiTrash />
        </Button>
      </div>

      {isCompleted && (
        <p className="font-main flex items-center justify-center text-sm text-green-400">
          <span>
            <HiCheck />
          </span>
          this goal completed
        </p>
      )}
    </>
  );
}

export default LongTermShowTools;
