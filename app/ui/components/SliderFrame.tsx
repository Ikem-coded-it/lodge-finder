import React from "react";
import cn from "@/app/lib/utils/cn";

type Prop = {
  children: React.ReactNode,
  className?: string
}

export default function SliderFrame({
  children,
  className
}: Prop) {

  const classIn = cn(
    "w-full h-[fit-content] overflow-x-scroll no-scrollbar flex justify-start items-center mb-[20px]",
    className
  )

  return (
    <div className={classIn}>
      {children}
    </div>
  )
}