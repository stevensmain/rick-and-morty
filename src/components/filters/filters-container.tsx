import { ReactNode } from "react";

type FilterRootProps = {
  children: ReactNode;
};

export function FilterRoot({ children }: FilterRootProps) {
  return (
    <div
      className={`w-full flex flex-wrap justify-center items-center gap-4 lg:gap-6 my-6 lg:flex-row lg:flex-nowrap`}
    >
      {children}
    </div>
  );
}
