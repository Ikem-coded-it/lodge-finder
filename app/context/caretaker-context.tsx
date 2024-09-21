import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import caretakerService from "../lib/services/caretaker.service";
import { toast } from "react-toastify";
import { Caretaker } from "../lib/definitions/caretaker";

type IProps = {
  caretaker: Caretaker | null;
  setCaretaker: Dispatch<SetStateAction<Caretaker | null>>;
  loading?: boolean;
} | null;

const CaretakerContext = createContext<IProps | null>(null);

export const useCaretakerContext = () => useContext(CaretakerContext);

export default function CaretakerContextProvider({
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
    setCaretaker,
  };

  return (
    <CaretakerContext.Provider value={value}>
      {children}
    </CaretakerContext.Provider>
  );
}
