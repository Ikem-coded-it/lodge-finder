import Main from "@/app/ui/components/Main";
import Hero from "@/app/ui/Home/Hero";
import Nav from "@/app/ui/components/Nav";
import Hot from "@/app/ui/Home/Hot";
import Features from "@/app/ui/Home/Features";
import OurStory from "@/app/ui/Home/OurStory";
import Testimonial from "@/app/ui/Home/Testimonial/index";
import Location from "@/app/ui/Home/Location";
import Footer from "@/app/ui/components/Footer";

export default function Page() {
  return (
    <Main>
      <Nav/>
      <Hero/>
      <Hot/>
      <Features/>
      <OurStory/>
      <Testimonial/>
      <Location/>
      <Footer/>
    </Main>
  )
}
