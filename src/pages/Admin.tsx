import { useEffect } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/adminDashboard/Sidebar";
import Header from "../components/adminDashboard/Header";
import useAuth from "../hooks/useAuth";
import { useGlobalContext } from "../context/GlobalContext";

const Admin = () => {
  const navigate = useNavigate();

  const { userData, getUserData } = useAuth();

  const { allUsers } = useGlobalContext();
  
  useEffect(() => {
    getUserData();
  }, []);
  
  useEffect(() => {
    if (userData) {
      if(userData && userData.role == "admin"){
        allUsers();
      } else {
        navigate(-1);
      }
    }
  }, [userData]);

  return (
    <div className="flex bg-neutral-100 w-full h-screen">
      <Sidebar />
      <div className="w-full p-3 flex flex-col gap-5">
        <Header />
        <div className="h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin
