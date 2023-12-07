import classNames from "classnames";
import { PropsWithChildren } from "react";

interface MainCardProps extends PropsWithChildren {
  isWide?: boolean;
}

export default function MainCard({ children, isWide = false }: MainCardProps) {
  return (
    <main className={classNames("mx-auto relative -top-[60px] pt-6 pb-11 px-8 w-full bg-inherit rounded-xl border border-shark-light flex-grow flex", isWide ? 'max-w-7xl' : 'max-w-[720px]')}>
      {children}
    </main>
  );
}
