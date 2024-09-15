"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Main from "@/app/ui/components/Main";
import VacancyForm from "@/app/ui/components/Dashboard/vacancies/form";
import { initialVacancyValues } from "@/app/lib/store/vacancy-form";
import DashboardHeader from "@/app/ui/components/Dashboard/header";
import CreateVacanciesContextProvider from "@/app/context/create-vacancies-context";
import $http from "@/app/lib/services/$http";
import { toast } from "react-toastify";
import ColorRingSpinner from "@/app/ui/components/spinner";
import { IVacancy } from "@/app/lib/models/vacancy";
import { Vacancy } from "@/app/lib/definitions/vacancy";
import { AxiosError } from "axios";

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const [vacancyData, setVacancyData] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchVacancy = async (id: string) => {
    setLoading(true);
    try {
      const res = await $http.get(`/api/vacancy/show/${id}`);
      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error: AxiosError | any) {
      toast.error("Failed to fetch vacancy");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
    return null;
  };

  useEffect(() => {
    if (id) {
      fetchVacancy(id as string).then((vacancyData) => {
        if (vacancyData) {
          setVacancyData(vacancyData);
        }
      });
    }
  }, [id]);
  return (
    <CreateVacanciesContextProvider>
      <Main>
        <DashboardHeader text="EDIT VACANCY" />

        <section className="w-full h-fit flex justify-center lg:justify-start">
          {loading && (
            <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center z-50">
              <ColorRingSpinner />
            </div>
          )}
          {!loading && vacancyData && (
            <VacancyForm initialValues={vacancyData} validation={{}} />
          )}
        </section>
      </Main>
    </CreateVacanciesContextProvider>
  );
}
