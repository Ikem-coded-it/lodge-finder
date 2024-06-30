import Main from "@/app/ui/components/Main";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Button from "@/app/ui/components/Button";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import DashboardLodgeCard from "@/app/ui/components/Dashboard/vacancies/lodge-card";
import DashboardHeader from "@/app/ui/components/Dashboard/header";
import DashboardVaccancies from "@/app/ui/components/Dashboard/vacancies/dashboard-vaccancies";

// protected page route
export default withPageAuthRequired(
  async function Page() {
    return (
      <Main>
        <DashboardHeader text="UPLOADED VACANCIES (4)">
          <a href="/dashboard/vacancies/create">
            <Button text="New vacancy" bg className="w-[125px] h-[38px] gap-1">
              <GoPlus size="18px" />
            </Button>
          </a>
        </DashboardHeader>

        <section className="w-full h-fit flex flex-col gap-6 justify-start items-center lg:items-start">
          <DashboardVaccancies />
          <DashboardLodgeCard className="bg-whiteBg-default min-w-[320px] max-w-[320px]  md:max-w-[600px]" />
          <DashboardLodgeCard className="bg-whiteBg-default min-w-[320px] max-w-[320px]  md:max-w-[600px]" />
          <DashboardLodgeCard className="bg-whiteBg-default min-w-[320px] max-w-[320px]  md:max-w-[600px]" />
          <DashboardLodgeCard className="bg-whiteBg-default min-w-[320px] max-w-[320px]  md:max-w-[600px]" />
        </section>
      </Main>
    );
  },
  { returnTo: "/dashboard/vacancies" }
);
