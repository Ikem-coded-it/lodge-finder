"use client";

import CreateVacanciesContextProvider from "@/app/context/create-vacancies-context";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /**
     * This is called createVacanciesContext provider but it just holds the currently logged in caretaker details
     * Don't confuse the naming
     */
    <CreateVacanciesContextProvider>{children}</CreateVacanciesContextProvider>
  );
}
