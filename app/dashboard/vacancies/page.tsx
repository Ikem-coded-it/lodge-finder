import Main from "@/app/ui/components/Main";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Button from "@/app/ui/components/Button";
import { GoPlus } from "react-icons/go";
import DashboardHeader from "@/app/ui/components/Dashboard/header";
import DashboardVaccancies from "@/app/ui/components/Dashboard/vacancies/dashboard-vaccancies";

// protected page route
export default withPageAuthRequired(
  async function Page() {
    return (
      <Main>
        <DashboardHeader text="UPLOADED VACANCIES">
          <a href="/dashboard/vacancies/create">
            <Button text="New vacancy" bg className="w-[125px] h-[38px] gap-1">
              <GoPlus size="18px" />
            </Button>
          </a>
        </DashboardHeader>

        <DashboardVaccancies />
      </Main>
    );
  },
  { returnTo: "/dashboard/vacancies" }
);
