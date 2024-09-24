import Main from "@/app/ui/components/Main";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Button from "@/app/ui/components/Button";
import Image from "next/image";
import DataColumn from "@/app/ui/components/Dashboard/profile/data-column";
import DashboardHeader from "@/app/ui/components/Dashboard/header";
import CaretakerDetailsLongcard from "@/app/ui/components/Dashboard/profile/caretaker-details-longcard";

// protected page route
export default withPageAuthRequired(
  async function Page() {
    return (
      <Main className="items-start">
        <DashboardHeader text="PROFILE">
          <a href="/dashboard/profile/edit">
            <Button className="w-[52px] h-[35px]" text="Edit" border />
          </a>
        </DashboardHeader>

        <CaretakerDetailsLongcard />
      </Main>
    );
  },
  { returnTo: "/dashboard/profile" }
);
