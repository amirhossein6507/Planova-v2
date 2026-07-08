import Modal from "@/src/_ui/Modal";
import { Button, SearchField } from "@heroui/react";
import { HiSquaresPlus } from "react-icons/hi2";
import DailyFormCreateOrEdit from "./DailyFormCreateOrEdit";

function HeaderDailyGoals() {
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
        <Modal.Btn>
          <Button isIconOnly className="h-8 w-8 min-w-8">
            <HiSquaresPlus />
          </Button>
        </Modal.Btn>

        <Modal.Window heading="Create Task">
          <DailyFormCreateOrEdit />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default HeaderDailyGoals;
