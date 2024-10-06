import Main from "@/app/ui/components/Main";
import Nav from "@/app/ui/components/Nav";
import Footer from "@/app/ui/components/Footer";
import FormContainer from "@/app/ui/components/Form/form-container";
import DonationForm from "./donation-form";

export default function Page() {
    return(
        <Main>
            <Nav/>
            <section className="min-h-[489px] max-h-fit w-full p-[30px] my-[30px] mx-[15px] md:mx-[25px] bg-lightGreyBg-default flex justify-center items-center">
                <FormContainer
                title="Donation"
                description="Thanks for choosing to support this service, please fill in the information below"
                >
                    <DonationForm/>
                </FormContainer>
            </section>
            <Footer/>
        </Main>
    )
}