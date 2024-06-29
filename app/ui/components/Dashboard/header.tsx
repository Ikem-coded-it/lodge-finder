import { ReactNode } from "react";

export default function DashboardHeader({
    text,
    children
} : {
    text: string
    children?: ReactNode
}) {
    return(
        <header className="h-[58px] w-full flex items-center justify-between px-4 py-2 mb-3">
            <h1 className="text-xs text-darkFont-default">
                {text}
            </h1>

            {children}
        </header>
    )
}