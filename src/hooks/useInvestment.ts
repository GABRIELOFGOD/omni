import { useCallback, useState } from "react";
import { BASEURL } from "../context/GlobalContext"
import { Investment } from "../utils";

const allInvestment = async (amount: number) => {
  try {
    const req = await fetch(`${BASEURL}/investment/invest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
      },
      body: JSON.stringify({amount})
    });
  
    const res = await req.json();
    console.log("response from investment", res);
    if (!req.ok) {
      throw new Error(res.message || "An error occurred, please try again");
    }
    return res;
  } catch (error: any) {
    throw error;
  }
}

const getInvestments = async () => {
  try {
    const response = await fetch(`${BASEURL}/investment/all-investments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user") as string)}`
      },
    });
    const res = await response.json();

    if (!response.ok) {
      throw new Error('Failed to get investments');
    }
    return res;
  } catch (err) {
    throw err;
  }
}

const activateAccount = async (amount: number) => {
  const request = await fetch(`${BASEURL}/investment/activate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`
    },
    body: JSON.stringify({amount})
  });
  const response = await request.json();

  if (!request.ok) {
    throw new Error(response.message || "An error occurred, please try again");
  }
  return response;
}

const claimInvestment = async (id: number) => {
  const request = await fetch(`${BASEURL}/investment/claim/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`
    }
  });
  const response = await request.json();

  if (!request.ok) {
    throw new Error(response.message || "An error occurred, please try again");
  }
  return response;
}

const useInvestment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [allUsersInvestments, setAllUsersInvestments] = useState<Investment[]>([]);
  
  const invest = useCallback(async (amount: number) => {
    setIsLoading(true);
    try {
      const res = await allInvestment(amount);
      return res;
    } catch (error: any) {
      setError(error.message || "An error occurred, please try again");
    }
    setIsLoading(false);
  }, []);

  const activate = useCallback(async (amount: number) => {
    setIsLoading(true);
    try {
      const res = await activateAccount(amount);
      return res;
    } catch (error: any) {
      setError(error.message || "An error occurred, please try again");
    }
    setIsLoading(false);
  }, []);

  const claim = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const res = await claimInvestment(id);
      return res;
    } catch (error: any) {
      setError(error.message || "An error occurred, please try again");
    }
    setIsLoading(false);
  }, []);

  const allInvestments = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getInvestments();
      setAllUsersInvestments(response.data);
      return response;
    } catch (err) {
      setError("Failed to get investments");
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    invest,
    activate,
    claim,
    allInvestments,
    allUsersInvestments
  }
}

export default useInvestment
