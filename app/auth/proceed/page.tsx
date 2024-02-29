import type { Metadata } from 'next'
import FormContainer from "@/app/ui/components/Form/form-container";
import ProceedPageButtons from "@/app/auth/proceed/proceedPageButtons";

const metadata: Metadata = {
  title: 'Proceed signup',
  description: "Confirm that you are a caretaker or landlord then proceed to signup"
}

export default function Page() {
  return(
    <FormContainer
    title="Sign up as caretaker"
    description="You are about to sign up as a caretaker agent on this platform. Signing up on this platform is only for caretakers or landlords who have lodges available for people in the area of Ifite Awka, Anambra State."
    >
      <ProceedPageButtons/>
    </FormContainer>
  )
}