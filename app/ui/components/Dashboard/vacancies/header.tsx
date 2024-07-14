"use client"

import SearchBar from "@/app/ui/vacancies/SearchBar";
// import { GoBell } from "react-icons/go";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useUser, UserProfile } from '@auth0/nextjs-auth0/client';
import { ImCoinDollar } from "react-icons/im";
import { useEffect, useState } from "react";
import caretakerService from "@/app/lib/services/caretaker.service";
import { Caretaker } from "@/app/lib/definitions/caretaker";

export default function DashboardVacanciesHeader() {
    const { user }: {user?: UserProfile} = useUser();
    const [caretaker, setCaretaker] = useState<Caretaker | null>(null)

    useEffect(() => {
        (async() => {
            const { caretaker } = await caretakerService.me()
            if(caretaker) setCaretaker(caretaker)
        })()
    }, [])

    const pathname = usePathname();
    return(
        <div className="h-[50px] lg:h-[81px] w-full bg-whiteBg-default flex justify-end items-center gap-4 md:gap-24 lg:gap-44 pr-6 absolute top-[60px] lg:top-0 right-0 z-[40]">
            <SearchBar/>

            <div className="h-fit flex gap-6">
                {/* <div className="relative h-fit w-fit">
                    <GoBell size="20px"/>
                    <div className="h-[10px] w-[10px] rounded-[50%] bg-red-500 absolute top-0 right-0"/>
                </div> */}

                {caretaker && <div className="hidden md:flex gap-[2px] items-center justify-center">
                    <ImCoinDollar size="30px"/>
                    <span>{(caretaker as Caretaker)?.credits ?? 0}</span>
                </div>}

                {
                    pathname !== "/dashboard/profile" && user && (
                        <Image
                        src={user?.picture ?? "/vercel.svg"}
                        alt="profile"
                        width={44}
                        height={32}
                        className="w-[20px] h-[20px] lg:w-[34px] lg:h-8 rounded-[50%]"
                        />
                    )
                }
            </div>
        </div>
    )
}