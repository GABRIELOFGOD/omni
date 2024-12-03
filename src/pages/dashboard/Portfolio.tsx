import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import AppointmentCards from "../../components/dashboard/AppointmentCards";
import useUser from "../../hooks/useUser";

const Portfolio = () => {
  const { userData, getUserData } = useAuth();
  const { getTeamData, totalNumber } = useUser();

  useEffect(() => {
    getUserData();
    getTeamData();
  }, []);
  
  return (
    <div className="bg-primary bg-opacity-5 w-full flex flex-col gap-5 h-full rounded-xl p-3 md:p-10">
      <div className="flex justify-between">
        <p className="text-lg md:text-2xl font-bold"><span className="capitalize">{userData?.firstName}'s Portfolio</span></p>
        <div className="flex">
          <div className={`h-2 w-2 rounded-full my-auto ${userData?.accountActivated ? "bg-green-500" : "bg-red-500"}`}></div>
          <p className="text-sm md:text-lg text-white ml-2 my-auto">{userData?.accountActivated ? "Active" : "Inactive"}</p>
        </div>
      </div>
      <div className={`w-full px-3 text-center py-1 text-[8px] md:text-sm font-semibold text-red-600 bg-red-200 rounded-lg ${userData?.accountActivated ? "hidden" : "flex"}`}>
        <p className="w-full text-center">Your account is inactive, please activate your account to start earning. <span className="font-bold underline cursor-pointer">Click here</span></p>
      </div>
      <AppointmentCards />
      <div className={`bg-primary rounded-md bg-opacity-10 p-3`}>
        <div>
          <p className={`text-lg md:text-2xl font-bold`}>Team</p>
          <p className="font-semibold text-sm">
            Total Team: <span className="text-primary">{totalNumber}</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio