'use client'
import { ImCoinDollar } from "react-icons/im";
import Button from "@/app/ui/components/Button";
import Image from "next/image"
import paymentService from "@/app/lib/services/payment.service";

export default function CreditPackageCard({ packageId, credits, price }: {
    packageId: number
    credits: number,
    price: number
}) {

    async function triggerCheckout() {
        const {authorizationUrl} = await paymentService.triggerCheckout(packageId)
        window.location.href = authorizationUrl
    }

    return (
        <div className="flex flex-col items-center h-[300px] w-[300px] justify-center gap-6 p-6 border-[2px] border-lightBlue-default rounded-[20px] hover:border-darkBlue-default transition-all duration-[.2s]">
            <h1 className="text-3xl">
                NGN {price}
            </h1>
            <div className="flex gap-2">
                <ImCoinDollar size="30px"/>
                <h2 className="text-2xl">{credits} credit</h2>
            </div>

            <Button
            text="Pay with Paystack"
            border
            className="h-[37px] w-[200px] hover:bg-transparent hover:text-darkBlue-default gap-2"
            onClick={() => triggerCheckout()}
            >
                <Image
                src="/paystack-logo.png"
                alt="paystack logo"
                height={20}
                width={20}
                />
            </Button>
        </div>
    )
}