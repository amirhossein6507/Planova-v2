"use client";

import { Tabs } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarHome() {
  const pathname = usePathname();

  const activeLink = pathname.includes("daily") ? "daily" : "long-term";

  if (false)
    return (
      <Tabs className="bg-black-950 sticky top-18 m-2 flex rounded-full">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab>
              <Link href="/home/daily">Daily Goals</Link>
              <Tabs.Indicator className="bg-turquoise/20 text-turquoise" />
            </Tabs.Tab>
            <Tabs.Tab>
              <Link href="/home/long-term">Long Term Goals</Link>
              <Tabs.Indicator className="bg-turquoise/20 text-turquoise" />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
      </Tabs>
    );

  return (
    <nav className="bg-black-950 border-turquoise/50 sticky top-18 z-20 m-2 flex rounded-full border p-0.5">
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
