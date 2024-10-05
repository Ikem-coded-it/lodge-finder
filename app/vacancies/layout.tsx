import { ReactNode } from "react";
import Main from "@/app/ui/components/Main";
import type { Metadata } from 'next'
import Nav from "@/app/ui/components/Nav";
import SearchBar from "@/app/ui/vacancies/SearchBar";
import Testimonial from "@/app/ui/Home/Testimonial/index";
import Location from "@/app/ui/Home/Location";
import Footer from "@/app/ui/components/Footer";
import Toast from "@/app/ui/components/Toast";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Vacancies',
  description:
    "Browse through all available vacancies around UNIZIK campus, Awka, Nigeria.",
  keywords: [
    "Lodge",
    "hotel",
    "Ifite",
    "Awka",
    "UNIZIK",
    "Accomodation",
    "Anambra",
    "caretaker",
    "lodge hunter",
    "student",
  ],
  metadataBase: new URL("https://lodgefinder.com.ng/vacancies"),
  authors: [{ name: "Onubogu Ikemefuna", url: "ikemcodes.netlify.app" }],
  creator: "Onubogu Ikemefuna",
  publisher: "Onubogu Ikemefuna",
};

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
      <Toast/>
    </Main>
  )
}