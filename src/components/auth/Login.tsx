import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import MiniLoading from "../primary/MiniLoading"
import { toast } from "sonner"

const Login = ({ toggle }: { toggle: () => void }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { error, login, loading } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const data = await login(email, password);
      console.log("data from useLogin", data);
      sessionStorage.setItem('token', data.token);
      toast.success('Login successful', {
        duration: 5000,
        position: 'top-right',
      });
      location.reload();
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  if (error) {
    toast.error(error)
  }
  
  return (
    <div className="bg-light w-full md:w-fit bg-opacity-30 backdrop-blur-md border-light border-2 rounded-lg">
      <h1 className="text-2xl text-center font-bold p-4">Login</h1>
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-lg font-bold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full md:w-[350px]"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="text-lg font-bold">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-light border-2 rounded-lg outline-none font-semibold p-2 w-full md:w-[350px] text-white bg-transparent"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex justify-between pb-5">
          <div className="text-light text-xs underline">Forgot Password?</div>
          <p className="text-light text-xs">Don't have an account? <span onClick={toggle} className="text-primary underline cursor-pointer">Register</span></p>
        </div>
        <button
          type="submit"
          className="bg-light bg-opacity-40 text-light w-full text-lg font-bold h-12 relative p-2 rounded-lg"
        >
          {loading ? <MiniLoading /> : "Login"}
        </button>
      </form>
    </div>
  )
}

export default Login