import React from "react";
import cn from "@/app/lib/utils/cn";

export default function Main({
  children,
  className
}:{
  children: React.ReactNode,
  className?: string
}) {

  const mergedClasses = cn(
    "flex min-h-screen flex-col items-center justify-start pt-[80px]",
    className
  )
  return (
    <main className={mergedClasses}>
      {children}
    </main>
  )
}