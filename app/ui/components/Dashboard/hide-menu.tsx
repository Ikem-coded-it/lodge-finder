"use client"

import { CaretakerNav } from "@/app/ui/components/Nav/Desktop";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function HideNavInDesktop() {
    const pathname = usePathname();

    return(
        <div className={clsx(
            {
                "lg:hidden": pathname.includes("dashboard")
            }
        )}>
            <CaretakerNav/>
        </div>
    )
}