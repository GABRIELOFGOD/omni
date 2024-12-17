import { useCallback, useState } from "react";
import { BASEURL } from "../context/GlobalContext"

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

const useInvestment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
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

  return {
    isLoading,
    error,
    invest
  }
}

export default useInvestment
