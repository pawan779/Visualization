import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface Expense {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  date: string;
}

interface AppContextProps {
  expenseData: Expense[]; // Array of Expense objects
  setExpenseData: Dispatch<SetStateAction<Expense[]>>; // Setter for the array
}

// Create a Context with an empty initial value
export const AppContext = createContext<Partial<AppContextProps>>({});

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [expenseData, setExpenseData] = useState<Expense[]>([
    {
      id: "",
      categoryId: "",
      name: "",
      price: 0,
      date: "",
    },
  ]);

  return (
    <AppContext.Provider value={{ expenseData, setExpenseData }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context.expenseData || !context.setExpenseData) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context as AppContextProps;
};
