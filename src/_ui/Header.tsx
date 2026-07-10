"use client";

import { HiCalendarDateRange, HiClock } from "react-icons/hi2";
import Logo from "./Logo";
import Link from "next/link";
import { format } from "date-fns-jalali";
import { getTodayJalali } from "../_utils/timeAdnDate";

function Header() {
  const today = getTodayJalali();

  return (
    <header className="bg-black-950/40 border-black-950 md: sticky top-2 right-2 left-2 z-20 m-2 flex items-center justify-between rounded-full border px-3 py-1 backdrop-blur-sm md:sticky">
      <Logo />

      <div className="flex gap-3">
        <Link
          href="/calendar"
          className="text-black-900 flex items-center gap-1 rounded-full bg-teal-400 p-0.5"
        >
          <span className="bg-black-900 flex h-6 w-6 items-center justify-center rounded-full text-white">
            <HiCalendarDateRange />
          </span>
          <span className="pr-1.5">{today}</span>
        </Link>

        <div className="bg-black-900 flex items-center gap-1 rounded-full border border-teal-400 p-0.5 text-white">
          <span className="text-black-900 flex h-6 w-6 items-center justify-center rounded-full bg-teal-400">
            <HiClock />
          </span>
          <span className="pr-1.5">22:22</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
