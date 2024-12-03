import { useCallback, useState } from "react";
import { BASEURL } from "../context/GlobalContext";
import { getToken } from "./useAuth";
import { UserData } from "../utils";
import { toast } from "sonner";

const getTeam = async () => {
  const token = getToken();
  if (!token || token == null) {
    throw new Error('No token found');
  }
  const response = await fetch(`${BASEURL}/user/team`, {
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

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [team, setTeam] = useState<UserData[]>([]);
  const [totalNumber, setTotalNumber] = useState<number>(0);

  const getTeamData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getTeam();
      if (data.status && data.status === 'error' || data.status === 'fail') {
        throw new Error(data.message);
      }
      setTotalNumber(data.totalTeamMembers);
      setTeam(data.referrers);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  },[]);

  return {
    getTeamData, team, totalNumber, error, isLoading
  }
}

export default useUser;