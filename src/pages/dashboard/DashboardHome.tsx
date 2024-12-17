// import { BsCoin } from "react-icons/bs"
import Advertisement from "../../components/Advertisement"
import AppointmentCards from "../../components/dashboard/AppointmentCards"
import AppointmentDetailsCard from "../../components/dashboard/AppointmentDetailsCard"
import UserDataComponent from "../../components/dashboard/UserData"
// import useAuth from "../../hooks/useAuth";
// import { useEffect } from "react";

const DashboardHome = () => {
  
  return (
    <div className="flex flex-col gap-5">
      {/* <div className="px-3">
        <div className="flex md:hidden divide-x-2 gap-5">
          <div className="flex my-auto gap-3">
            <div className="p-2 h-fit w-fit bg-primary text-white rounded-full">
              <BsCoin />
            </div>
            <p className="my-auto text-white  text-[16px]">${userData?.balance}</p>
          </div>
          <div className="flex m-auto gap-3 pl-5">
            <div className="p-2 h-fit w-fit bg-primary text-white rounded-full">
              <BsCoin />
            </div>
            <p className="my-auto text-white  text-[16px]">${userData?.claimable}</p>
          </div>
        </div>
      </div> */}
      <AppointmentCards />
      <AppointmentDetailsCard />
      <UserDataComponent />
      <div className="p-5 bg-primary min-h-[200px] rounded-md flex-col bg-opacity-10 w-full">
        <p className="pb-5 font-bold text-xl">Latest Updates</p>
        <div className=" flex items-center justify-center">
          <Advertisement />
        </div>
      </div>
    </div>
  )
}

export default DashboardHome