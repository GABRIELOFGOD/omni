import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Dashboard from "../../pages/dashboard/Dashboard"
import Loader from "./Loader";

import AuthScreen from "../auth/AuthScreen";

const Layout = () => {
  const { getUserData, isLoading, error, getToken } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    getUserData();
  },[]);

  useEffect(() => {
    if (error) {
      setToken(null);
      sessionStorage.removeItem('token');
    }
    const gotToken = getToken();
    setToken(gotToken);
  },[error]);

  if (isLoading) {
    return <div><Loader /></div>
  }

  return (
    <div>
      {error || !token ? <AuthScreen /> : <Dashboard />}
    </div>
  )
}

export default Layout