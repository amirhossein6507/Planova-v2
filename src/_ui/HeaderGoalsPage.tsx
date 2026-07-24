import dynamic from "next/dynamic";
import { getCategories } from "@/src/_lib/server";

import { Button, SearchField } from "@heroui/react";
import { HiSquaresPlus } from "react-icons/hi2";
import LongTermFormCreate from "../_features/LongTermGoals/LontTermFormCreate";
const Modal = dynamic(() => import("@/src/_ui/Modal"));
const ModalWindow = dynamic(() => import("@/src/_ui/ModalWindow"));
const DailyFormCreateOrEdit = dynamic(
  () => import("@/src/_features/DailyGoals/DailyFormCreate"),
);

type HeaderGoalsPageProps = {
  typeGoals: "daily" | "long-term";
};

async function HeaderGoalsPage({ typeGoals }: HeaderGoalsPageProps) {
  const categories = await getCategories(1);

  const isDaily = typeGoals === "daily";
  const isLongTerm = typeGoals === "long-term";

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
          {isDaily && <DailyFormCreateOrEdit categories={categories} />}

          {isLongTerm && <LongTermFormCreate categories={categories} />}
        </ModalWindow>
      </Modal>
    </div>
  );
}

export default HeaderGoalsPage;
