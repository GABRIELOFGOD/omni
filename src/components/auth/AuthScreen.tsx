import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { useLocation } from "react-router-dom";

const AuthScreen = () => {
  const [screen, setScreen] = useState<string>('login');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ref = queryParams.get('ref');

  const toggleScreen = () => {
    setScreen(screen === 'login' ? 'register' : 'login');
  }

  useEffect(() => {
    if (ref) {
      setScreen('register');
    }
  }, []);
  
  return (
    <div className="w-full flex justify-center items-center px-3 h-screen ">
      {screen === 'login' ? <Login toggle={toggleScreen} /> : <Register toggle={toggleScreen} />}
    </div>
  )
}

export default AuthScreen