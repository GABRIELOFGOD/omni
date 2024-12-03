import { useCallback, useState } from "react";
import { UserData } from "../utils";
import { BASEURL } from "../context/GlobalContext";
import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

export const getToken = () => {
  return sessionStorage.getItem('token');
}

const getProfile = async () => {
  const token = getToken();
  if (!token || token == null) {
    throw new Error('No token found');
  }
  const response = await fetch(`${BASEURL}/user/profile`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}

const useAuth = () => {
  const [userData, setUserData] = useState<UserData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const navigate = useNavigate();

  const getUserData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getProfile();
      if (data.status && data.status === 'error') {
        throw new Error(data.message);
      }
      setUserData(data.user);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  },[]);
  
  return {
    getUserData, userData, error, isLoading, getToken
  }
}

export default useAuth;