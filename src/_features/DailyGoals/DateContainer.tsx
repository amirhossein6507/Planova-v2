"use client";

import { getTodayJalali } from "@/src/_utils/timeAndDate";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

type DateContainerProps = {
  children: ReactNode;
  date: string;
};

function DateContainer({ children, date }: DateContainerProps) {
  const today = getTodayJalali();
  const isToday = date === today;
  const [open, setOpen] = useState(isToday);

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  return (
    <div>
      <div className="mb-2 flex w-full items-center gap-2 text-[12px] text-zinc-400">
        <span>{date}</span>
        <span className="block flex-1 border-t border-zinc-400" />
        <button onClick={() => handleOpen()}>
          {open ? <HiChevronUp size={16} /> : <HiChevronDown size={16} />}
        </button>
      </div>

      {open && <div className="space-y-3">{children}</div>}
    </div>
  );
}

export default DateContainer;
