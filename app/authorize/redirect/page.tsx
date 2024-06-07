import Main from "@/app/ui/components/Main";
import ColorRingSpinner from "@/app/ui/components/spinner";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import ApplicationRoutes from "@/app/config/routes";
import { saveUser, $user, saveToken } from "@/app/lib/store/user.atom";
import { User } from "@/app/lib/definitions/user"

export default withPageAuthRequired(async function Page() {
    const session = await getSession();
    if(session?.user)
    return redirect(ApplicationRoutes.DASHBOARD.VACANCIES.VIEW)

    return(
        <Main className="justify-center items-center bg-white">
            <div className="flex flex-col gap-2 justify-center items-center">
                <p>Please wait...</p>
                <ColorRingSpinner size={150}/>
            </div>
        </Main>
    )
}, {returnTo: ApplicationRoutes.AUTH.REDIRECT})