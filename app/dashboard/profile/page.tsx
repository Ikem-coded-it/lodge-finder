import Main from "@/app/ui/components/Main";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Button from "@/app/ui/components/Button";
import Image from "next/image";
import DataColumn from "@/app/ui/components/Dashboard/profile/data-column";
import DashboardHeader from "@/app/ui/components/Dashboard/header";
import { useCreateVacanciesContext } from "@/app/context/create-vacancies-context";
import CaretakerDetailsLongcard from "@/app/ui/components/Dashboard/profile/caretaker-details-longcard";

// protected page route
export default withPageAuthRequired(
  async function Page() {
    return (
      <Main>
        <DashboardHeader text="PROFILE">
          <Link href="/dashboard/profile/edit">
            <Button className="w-[52px] h-[35px]" text="Edit" border />
          </Link>
        </DashboardHeader>

        {/* <section className="rounded-[8px] drop-shadow-md w-full min-h-[150px] max-h-fit flex flex-col lg:flex-row justify-start items-center gap-[50px] py-6 px-5 bg-whiteBg-default">
          <Image
            width={100}
            height={100}
            className="w-[100px] h-[100px] rounded-[50%]"
            src="/default-profile.png"
            alt="profile"
          />

          <div className="flex flex-col lg:flex-row justify-start gap-8">
            <DataColumn>
              <Display label="Full name" value="Paul Emeribe" />
              <Display label="Email" value="paulemeribe@gmail.com" />
            </DataColumn>

            <DataColumn>
              <Display label="Call number" value="+234 813 851 8766" />
              <Display label="Whatsapp number" value="+234 811 834 2406" />
            </DataColumn>
          </div>
        </section> */}

        <CaretakerDetailsLongcard />
      </Main>
    );
  },
  { returnTo: "/dashboard/profile" }
);

const Display = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-start gap-[10px]">
    <h2 className="font-[500] text-xs text-lightFont-default">{label}</h2>
    <p className="font-[500] text-sm text-darkFont-default">{value}</p>
  </div>
);
