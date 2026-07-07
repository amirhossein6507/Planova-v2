"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarHome() {
  const pathname = usePathname();

  const activeLink = pathname.includes("daily") ? "daily" : "long-term";

  return (
    <nav className="bg-black-950 sticky top-18 m-2 flex rounded-full p-0.5">
      <Link
        href="/home/daily"
        className={`w-6/12 rounded-full py-2 text-center ${activeLink === "daily" ? "bg-turquoise/20 text-turquoise" : ""}`}
      >
        Daily Goals
      </Link>
      <Link
        href="/home/long-term"
        className={`w-6/12 rounded-full py-2 text-center ${activeLink === "long-term" ? "bg-turquoise/20 text-turquoise" : ""}`}
      >
        Long Term Goals
      </Link>
    </nav>
  );
}

export default NavbarHome;
