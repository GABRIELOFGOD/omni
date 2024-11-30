import { MdOutlineDashboard } from "react-icons/md"
import { BsWalletFill, BsCurrencyExchange } from "react-icons/bs";
import { TbBuildingBridge2, TbBrandBackbone } from "react-icons/tb";
import { PiFarmLight } from "react-icons/pi";
import { FaCreativeCommonsSa } from "react-icons/fa";
import { GrStakeholder } from "react-icons/gr";
import { IoMdTrendingUp } from "react-icons/io";
import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../../context/GlobalContext";
// import { MenuItems } from "../../utils/constants"

const Sidebar = () => {
  const { sidebarOpen } = useGlobalContext();
  
  return (
    <div className={`w-fit flex flex-col px-3 py-5 bg-dark h-full text-white md:left-0 md:relative absolute duration-300 z-40 ${sidebarOpen ? "left-0" : "left-[-500px]"} `}>
      <NavLink to="/" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <MdOutlineDashboard />
        <span className="pr-16 text-[18px] font-medium">Home</span>
      </NavLink>
      <NavLink to="/portfolio" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <BsWalletFill />
        <span className="pr-16 text-[18px] font-medium">Portfolio</span>
      </NavLink>
      <NavLink to="/exchange" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <BsCurrencyExchange />
        <span className="pr-16 text-[18px] font-medium">Exchange</span>
      </NavLink>
      <NavLink to="/bridge" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <TbBuildingBridge2 />
        <span className="pr-16 text-[18px] font-medium">Bridge</span>
      </NavLink>
      <NavLink to="/farm" className="flex items-center gap-3 p-2 my-2 rounded-md hover:bg-gray-700" end>
        <PiFarmLight />
        <span className="pr-16 text-[18px] font-medium">Farm</span>
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
      </NavLink>
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