import { IoIosArrowDown } from "react-icons/io";
import { BsCoin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useGlobalContext } from "../../context/GlobalContext";

const Header = () => {
  const { toggleSidebar } = useGlobalContext();
  
  return (
    <div className="py-2 md:py-4 shadow-sm sticky top-0 left-0 z-40 bg-secondary px-3 md:px-20 flex justify-between">
      <div className="gap-3 flex">
        <div onClick={toggleSidebar} className="flex md:hidden text-white text-4xl my-auto">
          <BiMenu />
        </div>
        <Link to="/" className="my-auto"><p className="font-semibold md:text-2xl text-xl text-white my-auto ">OMNI-STOCK</p></Link>
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
            <p className="my-auto text-white  text-[16px]">$120</p>
          </div>
          <div className="flex m-auto gap-3 pl-5">
            <div className="p-2 h-fit w-fit bg-primary text-white rounded-full">
              <BsCoin />
            </div>
            <p className="my-auto text-white  text-[16px]">$120</p>
          </div>
        </div>
        <button className="text-white font-medium text-[16px] py-3 px-12 border-2 border-primary rounded-lg">
          Connect
        </button>
      </div>
    </div>
  )
}

export default Header