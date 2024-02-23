import { ReactNode } from "react";
import Main from "@/app/ui/components/Main";
import type { Metadata } from 'next'
import { MainNav } from "@/app/ui/Nav/Desktop";
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
      <MainNav/>
      <SearchBar/>
      {children}
      <Testimonial/>
      <Location/>
      <Footer/>
    </Main>
  )
}