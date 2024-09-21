import React, { createContext, ReactNode, useEffect, useState } from "react";
import $http from "../lib/services/$http";
import { Vacancy } from "../lib/definitions/vacancy";
import { toast } from "react-toastify";

// Define the type for the values object
interface VacanciesContextType {
  totalDocument: number;
  setTotalDocument: React.Dispatch<React.SetStateAction<number>>;
  vacancies: Vacancy[];
  setVacancies: React.Dispatch<React.SetStateAction<Vacancy[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const VacanciesContext = createContext<VacanciesContextType>(
  {} as VacanciesContextType
);

export const VacanciesProvider = ({ children }: { children: ReactNode }) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [totalDocument, setTotalDocument] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const result = await $http.get("/api/vacancy"); // Adjust the API endpoint as needed
        setTotalDocument(result?.data?.totalDocuments);
        setVacancies(result?.data?.data);
      } catch (error) {
        toast.error("Error fetching vacancies");
      } finally {
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  const values: VacanciesContextType = {
    totalDocument,
    setTotalDocument,
    vacancies,
    setVacancies,
    loading,
    setLoading,
  };

  return (
    <VacanciesContext.Provider value={values}>
      {children}
    </VacanciesContext.Provider>
  );
};

export const useVacancies = () => React.useContext(VacanciesContext);
