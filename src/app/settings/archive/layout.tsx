import { ReactNode } from "react";

function Layout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <div>
      <h1>layout</h1>
      {children}
    </div>
  );
}

export default Layout;
