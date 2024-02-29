import Main from "@/app/ui/components/Main";
import Nav from "@/app/ui/components/Nav";
import Footer from "@/app/ui/components/Footer";
import { ReactNode } from "react";

export default function Page({
  children
}:{
  children: ReactNode
}) {
  return (
    <Main>
      <Nav/>
      <section className="min-h-[489px] max-h-fit w-full p-[30px] my-[30px] mx-[15px] md:mx-[25px] bg-lightGreyBg-default flex justify-center items-center">
        {children}
      </section>
      <Footer/>
    </Main>
  )
}