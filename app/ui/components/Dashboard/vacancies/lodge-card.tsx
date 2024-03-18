import HorizontalLodgeCard from "@/app/ui/components/LodgeCard/horizontal";
import Button from "../../Button";
import Link from "next/link";
import { FaMinus } from "react-icons/fa";

type LodgeCardType = {
    className?: string
}

export default function DashboardLodgeCard({
    className
} : LodgeCardType ) {
    return(
        <div className="h-fit w-fit">
            <div className=" flex justify-end h-[58px] w-full py-[10px] px-[15px]">
                <Link href="/dashboard/vacancies/edit">
                    <Button
                    className="w-[52px] h-[35px]"
                    text="Edit"
                    border
                    />
                </Link>
            </div>
            <HorizontalLodgeCard type="dashboard" className={className}/>
        </div>
    )
}