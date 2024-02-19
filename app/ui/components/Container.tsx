import { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren<{
  className?: string;
  fluid?: boolean;
}>;

export default function Container({ children, className, fluid }: Props) {
  return (
    <div
      className={clsx(
        {
          "container px-5 lg:px-8": !fluid,
        },
        `${className}`
      )}
    >
      {children}
    </div>
  );
}