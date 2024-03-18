import Main from "@/app/ui/components/Main";
import {  withPageAuthRequired } from "@auth0/nextjs-auth0";
import Button from "@/app/ui/components/Button";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import HorizontalLodgeCard from "@/app/ui/components/LodgeCard/horizontal";
import DashboardLodgeCard from "@/app/ui/components/Dashboard/vacancies/lodge-card";

// protected page route
export default withPageAuthRequired (async function Page() {
    return(
        <Main>
            <header className="h-[58px] w-full flex items-center justify-between px-4 py-2 mb-3">
                <h1 className="text-xs text-darkFont-default">
                    UPLOADED VACANCIES {`(4)`}
                </h1>

                <Link href="/dashboard/vacancies/create">
                    <Button
                    text="New vacancy"
                    bg
                    className="w-[125px] h-[38px] gap-1"
                    >
                        <GoPlus size="18px"/>
                    </Button>
                </Link>
            </header>

            <section className="w-full h-fit flex flex-col gap-6 justify-start items-center lg:items-start">
                <DashboardLodgeCard className="bg-whiteBg-default min-w-[320px] max-w-[320px]  md:max-w-[600px]"/>
                <DashboardLodgeCard className="bg-whiteBg-default min-w-[320px] max-w-[320px]  md:max-w-[600px]"/>
                <DashboardLodgeCard className="bg-whiteBg-default min-w-[320px] max-w-[320px]  md:max-w-[600px]"/>
                <DashboardLodgeCard className="bg-whiteBg-default min-w-[320px] max-w-[320px]  md:max-w-[600px]"/>
            </section>
        </Main>
    )
}, { returnTo: '/dashboard/vacancies' })