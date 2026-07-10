"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { archivingDailyGoal, deleteDailyGoal } from "../_lib/actions";

import { Button, Dropdown, Label } from "@heroui/react";
import {
  HiArchiveBoxArrowDown,
  HiEllipsisHorizontal,
  HiPencil,
  HiTrash,
} from "react-icons/hi2";
import DailyFormEdit from "../_features/DailyGoals/DailyFormEdit";
const Modal = dynamic(() => import("@/src/_ui/Modal"));
const ModalWindow = dynamic(() => import("@/src/_ui/ModalWindow"));

type DropDownItems = {
  dailyId: number;
  categories: any[];
  dailyGoal: any;
  steps: any;
};

function DropDownItems({
  dailyId,
  categories,
  dailyGoal,
  steps,
}: DropDownItems) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Dropdown>
        <Button isIconOnly variant="tertiary" className="h-7 w-7 min-w-7 p-0">
          <HiEllipsisHorizontal />
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleOpen}>
              <Label className="flex items-center gap-2">
                <HiPencil />
                Edit
              </Label>
            </Dropdown.Item>

            <Dropdown.Item onClick={() => archivingDailyGoal(dailyId)}>
              <Label className="flex items-center gap-2">
                <HiArchiveBoxArrowDown />
                Archive
              </Label>
            </Dropdown.Item>

            <Dropdown.Item
              variant="danger"
              onClick={() => deleteDailyGoal(dailyId)}
            >
              <Label className="flex items-center gap-2">
                <HiTrash />
                Delete
              </Label>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>

      <Modal>
        <ModalWindow heading="Edit Task" isOpen={open} close={setOpen}>
          <DailyFormEdit
            categories={categories}
            dailyGoal={dailyGoal}
            currentSteps={steps}
          />
        </ModalWindow>
      </Modal>
    </>
  );
}

export default DropDownItems;
