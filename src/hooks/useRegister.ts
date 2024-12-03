import { useCallback, useState } from "react";
import { BASEURL } from "../context/GlobalContext";
import { UserRegisterData } from "../utils";

const registerCall = async (data: UserRegisterData) => {
  try {
    const request = await fetch(`${BASEURL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    console.log("response", response);
    if (!request.ok) {
      throw new Error(response.message);
    }
    return response;
  } catch (error) {
    throw error;
  }
}

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const registerUser = useCallback(async (data: UserRegisterData) => {
    try {
      setLoading(true);
      const response = await registerCall(data);
      setLoading(false);
      return response;
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  }, []);

  return { loading, error, registerUser };
}