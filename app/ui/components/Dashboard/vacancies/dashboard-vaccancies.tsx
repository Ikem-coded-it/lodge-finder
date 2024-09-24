"use client";

import $http from "@/app/lib/services/$http";
import { useEffect, useState } from "react";
import DashboardLodgeCard from "./lodge-card";
import { toast } from "react-toastify";
import ColorRingSpinner from "../../spinner";
import { IVacancy } from "@/app/lib/models/vacancy";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function DashboardVaccancies() {
  const { user, isLoading } = useUser();

  const [vacancies, setVacancies] = useState<IVacancy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (!isLoading) {
          const res = await $http.get(`/api/vacancy/${user?.sub}`);
          setVacancies(res?.data?.data);
          setLoading(false);
        }
      } catch (error: any) {
        toast.error(error?.response.data ?? error?.message);
        setLoading(false);
      }
    })();
  }, [user, isLoading]);

  return (
    <section className="w-full h-fit flex flex-col gap-6 justify-start max-[500px]:items-center items-start">
      {loading ? (
        <div className="fixed inset-0 bg-white flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1>Please wait...</h1>
            <ColorRingSpinner />
          </div>
        </div>
      ) : (
        <>
          {vacancies.length > 0 ? (
            <>
              {vacancies.map((vacancy, index) => {
                return (
                  <DashboardLodgeCard
                    className="bg-whiteBg-default  min-w-[320px] max-[500px]:max-w-[350px] max-w-[450px]  md:max-w-[600px]"
                    key={index}
                    vacancy={vacancy}
                    setVacancies={setVacancies}
                  />
                );
              })}
            </>
          ) : (
            <h1>No vacancies found</h1>
          )}
        </>
      )}
    </section>
  );
}
