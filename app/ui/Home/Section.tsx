import { ReactNode } from "react";

export default function Section({children}: {children: ReactNode}) {
  return <section className="w-[95vw] max-h-[fit-content] flex flex-col justify-start items-center my-[50px]">
    {children}
  </section>
}