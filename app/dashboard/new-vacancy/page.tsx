import Main from "@/app/ui/components/Main";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

// protected page route
export default withPageAuthRequired (async function Page() {
    return(
        <Main>
            <h1>New vacancy</h1>
        </Main>
    )
}, { returnTo: '/dashboard/new-vacancy' })