import { ReactNode } from "react";

function Layout({ children }: { children: Readonly<ReactNode> }) {
  return <div>{children}</div>;
}

export default Layout;
