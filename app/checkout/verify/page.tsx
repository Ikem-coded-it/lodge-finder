'use client'

import Main from "@/app/ui/components/Main"
import LodgeFinderLogo from "@/app/ui/components/Nav/LodgeFinderLogo"
import ColorRingSpinner from "@/app/ui/components/spinner"
import { useState, useEffect } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import ApplicationRoutes from "@/app/config/routes";
import paymentService from "@/app/lib/services/payment.service";
import Link from "next/link";
import Button from "@/app/ui/components/Button";

export default function Page({ searchParams }: {searchParams: any}) {
    const [verified, setVerified] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)
    const { reference, trxref } = searchParams

    async function verify() {
        const { message } = await paymentService.verifyPayment(reference, trxref)
        if(message === 'success')
            return setVerified(true)
        else
            return setFailed(true)
    }

    useEffect(() => {
        verify()
    }, [])

    return (
        <Main className="w-screen p-0 m-0 h-screen relative justify-center items-center">
            <LodgeFinderLogo className="absolute top-[20px] left-[20px]"/>

            {
                !verified && !failed ? (
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-lg text-gray-600">
                            Verifying...
                        </p>

                        <ColorRingSpinner size={100}/>
                    </div>
                ) : verified && !failed ? (
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-lg text-gray-600">
                            Payment verification successful!
                        </p>
                        <IoCheckmarkCircle size="60px" color="green"/>
                        <Link href={ApplicationRoutes?.DASHBOARD?.VACANCIES?.CREATE}>
                            <Button
                            text="Back to dashboard"
                            bg
                            className="h-[48px] w-[150px]"
                            />
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-lg text-gray-600">
                            Payment verification failed
                        </p>
                        <MdCancel size="60px" color="red"/>
                        <Link href={ApplicationRoutes?.DASHBOARD?.VACANCIES?.VIEW}>
                            <Button
                            text="Back to dashboard"
                            bg
                            className="h-[48px] w-[150px]"
                            />
                        </Link>
                    </div>
                )
            }
        </Main>
    )
}