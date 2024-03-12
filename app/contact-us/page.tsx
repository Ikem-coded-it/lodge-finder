import type { Metadata } from 'next'
import Main from "@/app/ui/components/Main";
import Nav from "@/app/ui/components/Nav";
import Footer from "@/app/ui/components/Footer";
import FormContainer from "@/app/ui/components/Form/form-container";
import ContactUsForm from "./contact-us-form";

const metadata: Metadata = {
  title: 'Contact us',
}

export default async function Page() {
 
  return(
    <Main>
      <Nav/>
      <section className="min-h-[489px] max-h-fit w-full p-[30px] my-[30px] mx-[15px] md:mx-[25px] bg-lightGreyBg-default flex justify-center items-center">
        <FormContainer
        title="Contact us"
        description="Have any issues to report or enquiries to make?, fill the form below."
        >
          <ContactUsForm/>
      </FormContainer>
      </section>
      <Footer/>
    </Main>
  )
}