import { Button, Dropdown, Label } from "@heroui/react";
import { HiEllipsisHorizontal, HiPencil, HiTrash } from "react-icons/hi2";

function DropDownItems() {
  return (
    <Dropdown>
      <Button isIconOnly variant="tertiary" className="h-7 w-7 min-w-7 p-0">
        <HiEllipsisHorizontal />
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Label className="flex items-center gap-2">
              <HiPencil />
              Edit
            </Label>
          </Dropdown.Item>
          <Dropdown.Item variant="danger">
            <Label className="flex items-center gap-2">
              <HiTrash />
              Delete
            </Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}

export default DropDownItems;
