import type { Metadata } from 'next'
import FormContainer from "@/app/ui/components/Form/form-container";
import SignupForm from "@/app/auth/signup/signupForm";

const metadata: Metadata = {
  title: 'Signup',
}

export default function Page() {
  return(
    <FormContainer
    title="Create caretaker account"
    description="Please fill in the required fields below to create an account as a lodge caretaker. This grants you the ability to post vacancies available at your lodge on this platform."
    >
      <SignupForm/>
    </FormContainer>
  )
}