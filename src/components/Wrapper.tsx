import { ReactNode } from "react";
import { cn } from "../lib/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-18 py-6 max-sm:px-6", className)}>{children}</div>
  );
};

export default Wrapper;
