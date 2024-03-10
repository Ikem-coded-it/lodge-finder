import { ReactNode } from "react";
import Main from "@/app/ui/components/Main";
import type { Metadata } from 'next'
import Nav from "@/app/ui/components/Nav";
import SearchBar from "@/app/ui/vacancies/SearchBar";
import Testimonial from "@/app/ui/Home/Testimonial/index";
import Location from "@/app/ui/Home/Location";
import Footer from "@/app/ui/components/Footer";

export const metadata: Metadata = {
  title: 'Vacancies',
}

export default function Layout({
  children
}:{
  children: ReactNode
}) {
  return (
    <Main>
      <Nav/>
      <section className="fixed top-[80px] z-20 left-0 w-full flex justify-start items-center px-[10px] md:px-[30px] py-[20px] h-[81px] bg-whiteBg-default">
        <SearchBar button/>
      </section>
      {children}
      <Testimonial/>
      <Location/>
      <Footer/>
    </Main>
  )
}