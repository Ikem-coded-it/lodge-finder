"use client";

import { useCreateVacanciesContext } from "@/app/context/create-vacancies-context";
import DataColumn from "./data-column";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CaretakerDetailsLongcard() {
  const context = useCreateVacanciesContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (context && "caretaker" in context) {
      setLoading(false);
    }
  }, [context]);

  return (
    <section className="rounded-[8px] drop-shadow-md w-full min-h-[150px] max-h-fit flex flex-col lg:flex-row justify-start items-center gap-[50px] py-6 px-5 bg-whiteBg-default">
      {loading ? (
        <p>Loading caretaker details...</p>
      ) : (
        <>
          <Image
            width={100}
            height={100}
            className="w-[100px] h-[100px] rounded-[50%]"
            src="/default-profile.png"
            alt="profile"
          />

          <div className="flex flex-col lg:flex-row justify-start gap-8">
            <DataColumn>
              <Display
                label="Full name"
                value={`${context?.caretaker?.firstName || "N/A"} ${context?.caretaker?.lastName || ""}`}
              />
              <Display
                label="Email"
                value={context?.caretaker?.email || "N/A"}
              />
            </DataColumn>

            <DataColumn>
              <Display
                label="Call number"
                value={context?.caretaker?.callNumber || "N/A"}
              />
              <Display
                label="Whatsapp number"
                value={context?.caretaker?.whatsappNumber || "N/A"}
              />
            </DataColumn>
          </div>
        </>
      )}
    </section>
  );
}

const Display = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-start gap-[10px]">
    <h2 className="font-[500] text-xs text-lightFont-default">{label}</h2>
    <p className="font-[500] text-sm text-darkFont-default">{value}</p>
  </div>
);
