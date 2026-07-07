import { ReactNode } from "react";

function MainContainer({ children }: { children: ReactNode }) {
  return (
    <main className="bg-black-900 ani-shadow-box h-full w-full overflow-auto rounded-3xl text-white md:w-220 md:rounded-4xl">
      {children}
    </main>
  );
}

export default MainContainer;
