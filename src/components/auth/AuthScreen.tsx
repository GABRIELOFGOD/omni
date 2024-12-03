import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthScreen = () => {
  const [screen, setScreen] = useState<string>('login');

  const toggleScreen = () => {
    setScreen(screen === 'login' ? 'register' : 'login');
  }
  
  return (
    <div className="w-full flex justify-center items-center px-3 h-screen ">
      {screen === 'login' ? <Login toggle={toggleScreen} /> : <Register toggle={toggleScreen} />}
    </div>
  )
}

export default AuthScreen