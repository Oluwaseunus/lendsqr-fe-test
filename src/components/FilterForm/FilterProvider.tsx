import {
  Dispatch,
  useState,
  useContext,
  createContext,
  SetStateAction,
  PropsWithChildren,
} from "react";

interface FormState {
  date: string;
  email: string;
  status: string;
  username: string;
  phoneNumber: string;
  organization: string;
  [key: string]: string;
}

interface FormContext {
  formState: FormState;
  setFormState: Dispatch<SetStateAction<FormState>>;
}

export const FilterContext = createContext<FormContext | undefined>(undefined);

export const initialFormState = {
  date: "",
  email: "",
  status: "",
  username: "",
  phoneNumber: "",
  organization: "",
};

export default function FilterProvider({ children }: PropsWithChildren<{}>) {
  const [formState, setFormState] = useState(initialFormState);

  return (
    <FilterContext.Provider
      value={{
        formState,
        setFormState,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
}
