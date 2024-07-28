import HorizontalLodgeCard from "@/app/ui/components/LodgeCard/horizontal";
import Button from "../../Button";
import Link from "next/link";
import { FaMinus } from "react-icons/fa";
import { IVacancy } from "@/app/lib/models/vacancy";
import { Dispatch, SetStateAction } from "react";

type LodgeCardType = {
  className?: string;
  vacancy: IVacancy;
  setVacancies?: Dispatch<SetStateAction<IVacancy[]>>;
};

export default function DashboardLodgeCard({
  className,
  vacancy,
  setVacancies,
}: LodgeCardType) {
  return (
    <div className="h-fit w-fit">
      <div className=" flex justify-end h-[58px] w-full py-[10px] px-[15px]">
        <Link href="/dashboard/vacancies/edit">
          <Button className="w-[52px] h-[35px]" text="Edit" border />
        </Link>
      </div>
      <HorizontalLodgeCard
        type="dashboard"
        className={className}
        data={vacancy}
        setVacancies={setVacancies}
      />
    </div>
  );
}
