import type { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-[min(100%,_1080px)] h-full flex flex-col m-auto">
      <div>{children}</div>
    </div>
  );
};
