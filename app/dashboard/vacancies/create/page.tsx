"use client";

import Main from "@/app/ui/components/Main";
import VacancyForm from "@/app/ui/components/Dashboard/vacancies/form";
import { initialVacancyValues } from "@/app/lib/store/vacancy-form";
import DashboardHeader from "@/app/ui/components/Dashboard/header";
import CreateVacanciesContextProvider from "@/app/context/create-vacancies-context";

export default function Page() {
  return (
    <CreateVacanciesContextProvider>
      <Main>
        <DashboardHeader text="UPLOAD VACANCY" />

        <section className="w-full h-fit flex justify-center lg:justify-start">
          <VacancyForm initialValues={initialVacancyValues} validation={{}} />
        </section>
      </Main>
    </CreateVacanciesContextProvider>
  );
}
