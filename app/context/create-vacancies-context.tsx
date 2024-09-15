import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import caretakerService from "../lib/services/caretaker.service";
import { toast } from "react-toastify";
import { Caretaker } from "../lib/definitions/caretaker";

type IProps = {
  caretaker: Caretaker | null;
  loading?: boolean;
} | null;

const CreateVacanciesContext = createContext<IProps | null>(null);

export const useCreateVacanciesContext = () =>
  useContext(CreateVacanciesContext);

export default function CreateVacanciesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [caretaker, setCaretaker] = useState<Caretaker | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await caretakerService.me();

        setCaretaker(res?.caretaker);
      } catch (error: any) {
        toast.error(error?.message);
      }
    })();
  }, []);

  const value: IProps = {
    caretaker,
  };

  return (
    <CreateVacanciesContext.Provider value={value}>
      {children}
    </CreateVacanciesContext.Provider>
  );
}
