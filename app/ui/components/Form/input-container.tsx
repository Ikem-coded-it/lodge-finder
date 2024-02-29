import React from "react";
import cn from "@/app/lib/utils/cn";

export default function InputContainer({
  children,
  className
}:{
  children: React.ReactNode,
  className?: string
}) {

  const mergedClasses = cn(
    "flex flex-col md:flex-row justify-between items-start gap-[15px] h-fit w-full",
    className
  )
  return(
    <div className={mergedClasses}>
      {children}
    </div>
  )
}