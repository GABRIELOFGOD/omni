import { useEffect, useState } from "react"
import { toast } from "sonner"
import { BASEURL } from "../../context/GlobalContext"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Staking = () => {
  const [omniRate, setOmniRate] = useState("");
  const { getUserData, userData } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      if (userData?.role !== "admin") {
        toast.error("You are not authorized to view this page", {
          position: "top-right"
        });
        navigation(-1);
      }
    }
  }, [userData]);

  const updateRate = async () => {
    
    if (omniRate == "0") {
      toast.error("Please enter a valid rate", {
        position: "top-right"
      });
      return
    }
    
    try {
      const req = await fetch(`${BASEURL}/investment/rate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify({ amount: omniRate })
      });
      const res = await req.json();
      if (!req.ok) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
      }
    } catch (error: any) {
      toast.error(error.message);      
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-y-auto">
      <div>
        <p className="font-semibold text-xl">Omni rate for the day</p>
        <div>
          <input
            type="text"
            value={omniRate}
            onChange={(e) => setOmniRate(e.target.value)}
            placeholder="Enter rate"
            className="w-full p-2 rounded-md bg-dark text-primary outline-none"
          />
          <button
            onClick={updateRate}
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Update rate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Staking