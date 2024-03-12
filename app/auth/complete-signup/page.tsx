import type { Metadata } from 'next'
import FormContainer from "@/app/ui/components/Form/form-container";
import CompleteSignupForm from "@/app/auth/complete-signup/complete-signup-form";
import { getSession } from "@auth0/nextjs-auth0";

const metadata: Metadata = {
  title: 'Signup',
}

export default async function Page() {
  try {
    const session = await getSession();
    console.log(session)
  } catch (error: any) {
    console.log(error?.message)
  }
 
  return(
    <FormContainer
    title="Complete your profile"
    description="Please fill in the required fields below to complete your profile as a lodge caretaker. This grants you permission to post vacancies available at your lodge on this platform."
    >
      <CompleteSignupForm/>
    </FormContainer>
  )
}