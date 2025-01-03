import { MdOutlineDashboard } from "react-icons/md"
import { BsWalletFill, BsCurrencyExchange } from "react-icons/bs";
import { PiFarmLight } from "react-icons/pi";
import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../../context/GlobalContext";
import { IoMdTrendingUp } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { LuLogOut } from "react-icons/lu";
// import { MenuItems } from "../../utils/constants"

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useGlobalContext();

  const { getUserData, userData } = useAuth();

  useEffect(() => {
    getUserData();
  }, []);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  
  return (
    <div className={`w-fit flex flex-col px-3 md:sticky top-0 py-5 bg-dark h-full text-white md:left-0 absolute duration-300 z-40 ${sidebarOpen ? "left-0" : "left-[-500px]"} `}>
      <NavLink to="/" onClick={closeSidebar} className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <MdOutlineDashboard />
        <span className="pr-16 text-[18px] font-medium">Home</span>
      </NavLink>
      <NavLink to="/invest" onClick={closeSidebar} className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <BsCurrencyExchange />
        <span className="pr-16 text-[18px] font-medium">Invest</span>
      </NavLink>
      <NavLink to="/earnings" onClick={closeSidebar} className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <PiFarmLight />
        <span className="pr-16 text-[18px] font-medium">Earnings</span>
      </NavLink>
      <NavLink to="/team" onClick={closeSidebar} className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <BsWalletFill />
        <span className="pr-16 text-[18px] font-medium">Team</span>
      </NavLink>
      <NavLink to="/transactions" onClick={closeSidebar} className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <PiFarmLight />
        <span className="pr-16 text-[18px] font-medium">Transactions</span>
      </NavLink>
      {userData?.role == "admin" && <NavLink to="/dashboard" onClick={closeSidebar} className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <IoMdTrendingUp />
        <span className="pr-16 text-[18px] font-medium">Admin</span>
      </NavLink>}
      <button
        onClick={() => {
          sessionStorage.removeItem('token');
          window.location.reload();
        }}
        className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" 
      >
        <LuLogOut />
        <span className="pr-16 text-[18px] font-medium">Logout</span>
      </button>
      
      {/* <NavLink to="/bridge" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <TbBuildingBridge2 />
        <span className="pr-16 text-[18px] font-medium">Bridge</span>
      </NavLink>
      <NavLink to="/omnicoin" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <FaCreativeCommonsSa />
        <span className="pr-16 text-[18px] font-medium">Omnicoin</span>
      </NavLink>
      <NavLink to="/bonds" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <TbBrandBackbone />
        <span className="pr-16 text-[18px] font-medium">Bonds</span>
      </NavLink>
      <NavLink to="/staking" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <GrStakeholder />
        <span className="pr-16 text-[18px] font-medium">Staking</span>
      </NavLink>
      <NavLink to="/traders" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <IoMdTrendingUp />
        <span className="pr-16 text-[18px] font-medium">Traders</span>
      </NavLink> */}
      {/* {MenuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className="flex items-center p-2 my-2 rounded-md hover:bg-gray-700"
          end
        >
          {item.icon}
          <span className="ml-3">{item.title}</span>
        </NavLink>
      ))} */}
    </div>
  )
}

export default Sidebar