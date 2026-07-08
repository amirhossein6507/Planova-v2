"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  HiCog6Tooth,
  HiFire,
  HiHome,
  HiMiniRectangleGroup,
  HiOutlineCog6Tooth,
  HiOutlineFire,
  HiOutlineHome,
} from "react-icons/hi2";

const NAV_ITEM = [
  {
    name: "home",
    link: "/home",
    activeLink: <HiHome size={28} />,
    disableLink: <HiOutlineHome size={28} />,
  },
  {
    name: "chalenges",
    link: "/chalenges",
    activeLink: <HiFire size={28} />,
    disableLink: <HiOutlineFire size={28} />,
  },
  {
    name: "coming-soon",
    link: "/coming-soon",
    activeLink: <HiMiniRectangleGroup size={28} />,
    disableLink: <HiMiniRectangleGroup size={28} />,
  },
  {
    name: "settings",
    link: "/settings",
    activeLink: <HiCog6Tooth size={28} />,
    disableLink: <HiOutlineCog6Tooth size={28} />,
  },
];

function Navbar() {
  const [active, setActive] = useState(1);
  const pathname = usePathname();

  return (
    <nav className="bg-black-900/50 md:bg-black-900 absolute bottom-11 flex w-10/12 flex-row items-center gap-2 overflow-hidden rounded-3xl p-1 shadow-[0_0_5px_-1px_var(--color-turquoise)] backdrop-blur-2xl md:relative md:bottom-0 md:h-full md:w-fit md:flex-col md:justify-center md:gap-5 md:rounded-2xl md:px-1 md:shadow-[0_0_10px_var(--color-turquoise)]">
      {NAV_ITEM.map((item) => {
        const activeLink = pathname.startsWith(item.link);
        return (
          <Link
            key={item.name}
            href={item.link}
            className={`flex grow justify-center rounded-[20px] py-3 hover:bg-white/10 md:grow-0 md:rounded-xl md:px-3 ${activeLink ? "text-turquoise bg-turquoise/10" : "text-white"} `}

            onClick={() => setActive(1)}
          >
            {activeLink ? item.activeLink : item.disableLink}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
