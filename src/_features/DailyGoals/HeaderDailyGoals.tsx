import dynamic from "next/dynamic";
import { getCategories } from "@/src/_lib/server";

import { Button, SearchField } from "@heroui/react";
import { HiSquaresPlus } from "react-icons/hi2";
const Modal = dynamic(() => import("@/src/_ui/Modal"));
const ModalWindow = dynamic(() => import("@/src/_ui/ModalWindow"));
const DailyFormCreateOrEdit = dynamic(
  () => import("@/src/_features/DailyGoals/DailyFormCreate"),
);

async function HeaderDailyGoals() {
  const categories = await getCategories(1);

  return (
    <div className="mb-2 flex items-center gap-2">
      <SearchField aria-label="search-daily" className="flex-1">
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="search in daily goals" />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Modal>
        <Button isIconOnly className="h-8 w-8 min-w-8">
          <HiSquaresPlus />
        </Button>

        <ModalWindow heading="Create Task">
          <DailyFormCreateOrEdit categories={categories} />
        </ModalWindow>
      </Modal>
    </div>
  );
}

export default HeaderDailyGoals;
