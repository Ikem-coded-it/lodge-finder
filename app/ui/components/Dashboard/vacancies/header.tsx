"use client"

import SearchBar from "@/app/ui/vacancies/SearchBar";
import { GoBell } from "react-icons/go";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardVacanciesHeader() {
    const pathname = usePathname();
    return(
        <div className="h-[50px] lg:h-[81px] w-full bg-whiteBg-default flex justify-end items-center gap-4 md:gap-24 lg:gap-44 pr-6 absolute top-[80px] lg:top-0 right-0">
            <SearchBar/>

            <div className="h-fit flex gap-2">
                <div className="relative h-fit w-fit">
                    <GoBell size="20px"/>
                    <div className="h-[10px] w-[10px] rounded-[50%] bg-red-500 absolute top-0 right-0"/>
                </div>

                {
                    pathname !== "/dashboard/profile" && (
                        <Image
                        src="/person.png"
                        alt="profile"
                        width={44}
                        height={32}
                        className="w-[20px] h-[20px] lg:w-[44px] lg:h-8 rounded-[50%]"
                        />
                    )
                }
            </div>
        </div>
    )
}