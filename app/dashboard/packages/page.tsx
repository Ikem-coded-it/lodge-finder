import Main from "@/app/ui/components/Main";
import Button from "@/app/ui/components/Button";
import DashboardHeader from "@/app/ui/components/Dashboard/header";
import { ImCoinDollar } from "react-icons/im";
import CreditPackageCard from "@/app/ui/components/Dashboard/packages/credit-package-card";

const plans = [
    {
        packageId: 1,
        credits: 10,
        price: 1000
    },
    {
        packageId: 2,
        credits: 1,
        price: 150
    }
]

export default function Page() {
    return (
        <Main className="">
            <DashboardHeader text="PURCHASE COIN PACKAGES">
            </DashboardHeader>

            <section className="w-full h-fit flex flex-col lg:flex-row gap-6 justify-start lg:justify-center items-center lg:items-start">
                {
                    plans && plans.length > 0 && plans?.map(plan => (
                        <CreditPackageCard
                        key={plan?.price}
                        packageId={plan?.packageId}
                        credits={plan?.credits}
                        price={plan?.price}
                        />
                    ))
                }
            </section>
        </Main>
    )
}