import { createContext, ReactNode, useContext, useState } from "react";
import { UserData } from "../utils";
import { toast } from "sonner";
import { users } from "../utils/constants";

interface GlobalContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  toggleSidebar: () => void;
  allUsersState: UserData[];
  allUsers: () => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

// export const BASEURL = "https://api.yezbitcoin.team/api/v2";
export const BASEURL = "http://localhost:3000/api/v2";

export const ContextProvider = ({children}: {children: ReactNode}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [allUsersState, setAllUsers] = useState<UserData[]>(users);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const allUsers = async () => {
    const request = await fetch(`${BASEURL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem("token") as string)}`,
      },
    });
    const response = await request.json();
    if(!request.ok) {
      toast.error(response.message);
    }
    if(request.ok) {
      // setAllUsers(users);
      // setAllUsers(response.users);
    }
  }
  
  const stateValue: GlobalContextType = {
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
    allUsersState,
    allUsers,
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
