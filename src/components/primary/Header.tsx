import { IoIosArrowDown } from "react-icons/io";
import { BsCoin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMenu, BiUser } from "react-icons/bi";
import { useGlobalContext } from "../../context/GlobalContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoCopy } from "react-icons/go";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { formatMoney } from "../dashboard/AppointmentCards";

const Header = () => {
  const { toggleSidebar } = useGlobalContext();
  const { userData, getUserData } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  
  useEffect(() => {
    getUserData();
  }, []);
  
  return (
    <div className="py-2 md:py-4 shadow-sm sticky top-0 left-0 z-40 bg-secondary px-3 md:px-20 flex justify-between">
      <div className="gap-3 flex">
        <div onClick={toggleSidebar} className="flex md:hidden text-white text-4xl my-auto">
          <BiMenu />
        </div>
        <Link to="/" className="my-auto"><p className="font-semibold md:text-2xl text-lg text-white my-auto ">OMNI-STOCK</p></Link>
      </div>
      <div className="hidden md:flex gap-5 my-auto">
        <div className="flex gap-1 text-white">
          <p className="my-auto text-[16px]">NFT</p>
          <div className="my-auto"><IoIosArrowDown /></div>
        </div>
        <div className="flex gap-1 text-white">
          <p className="my-auto text-[16px]">Analytics</p>
          <div className="my-auto"><IoIosArrowDown /></div>
        </div>
        <div className="flex gap-1 text-white">
          <p className="my-auto text-[16px]">IDOs</p>
          <div className="my-auto"><IoIosArrowDown /></div>
        </div>
        <div className="flex gap-1 text-white">
          <p className="my-auto text-[16px]">Exchange</p>
          <div className="my-auto"><IoIosArrowDown /></div>
        </div>
      </div>
      <div className="flex gap-10 my-auto">
        <div className="md:flex hidden divide-x-2 gap-5">
          <div className="flex my-auto gap-3">
            <div className="p-2 h-fit w-fit bg-primary text-white rounded-full">
              <BsCoin />
            </div>
            <p className="my-auto text-white  text-[16px]">${formatMoney(userData?.balance || 0)}</p>
          </div>
          <div className="flex m-auto gap-3 pl-5">
            <div className="p-2 h-fit w-fit bg-primary text-white rounded-full">
              <BsCoin />
            </div>
            <p className="my-auto text-white  text-[16px]">${formatMoney(userData?.claimable || 0)}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className={`h-2 w-2 rounded-full my-auto ${userData?.accountActivated ? "bg-green-500" : "bg-red-500"}`}></div>
          <button
            className="flex gap-2 border border-light rounded-full py-3 px-3 border-opacity-30"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <div className="my-auto">
              <BiUser />
            </div>
            <div>
              <p className="font-bold my-auto">{userData?.firstName}</p>
              <p className="text-[8px] text-light">{userData?.country}</p>
            </div>
            <div className="my-auto">
              <RiArrowDropDownLine />
            </div>
            <div className={`absolute bg-secondary border flex-col border-light p-5 right-0 top-16 text-primary ${showMenu ? "flex" : "hidden"}`}>
              <div className="w-full flex flex-col pb-5 items-center gap-2 justify-center">
                <div className="border border-light rounded-full justify-center items-center flex h-10 w-10">
                  <BiUser size={20} />
                </div>
                <p className="font-semibold text-white">{userData?.firstName} {userData?.lastName}</p>
                <div className="flex gap-2">
                  <p className="text-light text-xs">UUID-{userData?.referralCode}</p>
                  <button>
                    <GoCopy />
                  </button>
                </div>
              </div>
              <hr />
              <div className="pt-5 flex flex-col gap-5">
                <Link to="/profile" className="flex gap-2 text-white text-sm">
                  <p>Profile</p>
                  <RiArrowDropDownLine />
                </Link>
                <Link to="/settings" className="flex gap-2 text-white text-sm">
                  <p>Settings</p>
                  <RiArrowDropDownLine />
                </Link>
                <Link to="/logout" className="flex gap-2 text-white text-sm">
                  <p>Logout</p>
                  <RiArrowDropDownLine />
                </Link>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header