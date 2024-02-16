import { ReactNode } from "react";

export default function Section({
  children, 
  className
}: {
  children: ReactNode, 
  className?: string
}) {
  return <section className={`${className} w-[94vw] md:w-[94vw] max-h-[fit-content] flex justify-start items-center my-[25px] bg-whiteBg-default`}>
    {children}
  </section>
}