// import { BsCoin } from "react-icons/bs"
import AppointmentCards from "../../components/dashboard/AppointmentCards"
import AppointmentDetailsCard from "../../components/dashboard/AppointmentDetailsCard"
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
    </div>
  )
}

export default DashboardHome