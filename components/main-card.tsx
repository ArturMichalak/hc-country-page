import { PropsWithChildren } from "react";

export default function MainCard({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto relative -top-[60px] pt-6 pb-11 px-8 w-full max-w-7xl bg-inherit rounded-xl border border-shark-light flex-grow flex">
      {children}
    </main>
  );
}
