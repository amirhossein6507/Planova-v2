import NavbarHome from "@/src/_ui/NavbarHome";
import Link from "next/link";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <NavbarHome />
      <div className="p-3">{children}</div>
    </div>
  );
}

export default Layout;
