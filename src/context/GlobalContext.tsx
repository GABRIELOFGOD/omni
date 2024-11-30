import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const ContextProvider = ({children}: {children: ReactNode}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }
  
  const stateValue: GlobalContextType = {
    sidebarOpen,
    toggleSidebar
  };
  
  return (
    <GlobalContext.Provider value={stateValue}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a CreateGlobalContext");
  }
  return context;
};
