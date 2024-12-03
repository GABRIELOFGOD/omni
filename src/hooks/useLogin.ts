import { useCallback, useState } from "react";
import { BASEURL } from "../context/GlobalContext";

const fetchLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASEURL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const res = await response.json();
    console.log(res);
    if (!response.ok) {
      throw new Error(res.message || 'Invalid credentials');
    }
  
    return res;
  } catch (error: any) {
    throw new Error(error.message || 'Invalid credentials');
  }
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await fetchLogin(email, password);
      return data;
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
  }, []);

  return { loading, error, login, logout };
  
}
