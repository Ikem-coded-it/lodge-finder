import type { Metadata } from 'next'
import FormContainer from "@/app/ui/components/Form/form-container";
import CompleteSignupForm from "@/app/auth/complete-signup/complete-signup-form";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

export const metadata: Metadata = {
  title: 'Complete signup',
  description: "Finish caretaker signup process",
  keywords: ["lodge", "caretaker", "Nnamdi Azikiwe", "UNIZIK"]
}

export default withPageAuthRequired(async function Page() {
  const session = await getSession();
  return(
    <FormContainer
    title="Complete your profile"
    description="Please fill in the required fields below to complete your profile as a lodge caretaker. This grants you permission to post vacancies available at your lodge on this platform."
    >
      <CompleteSignupForm {...(session?.user ?? {})}/>
    </FormContainer>
  )
}, { returnTo: '/auth/complete-signup' })