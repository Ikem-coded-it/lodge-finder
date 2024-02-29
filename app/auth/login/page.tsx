import type { Metadata } from 'next'
import FormContainer from "@/app/ui/components/Form/form-container";
import LoginForm from "@/app/auth/login/loginForm";

const metadata: Metadata = {
  title: 'Login',
}

export default function Page() {
  return(
    <FormContainer
    title="Account login"
    description=""
    >
      <LoginForm/>
    </FormContainer>
  )
}