import { CgClose } from "react-icons/cg"
import { UserData, UserRank } from "../utils/index.d";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import CustomInput from "./CustomInput";
import { formatMoney } from "./dashboard/AppointmentCards";

const UserDetails = ({user, closeModal}:{user: UserData, closeModal: () => void}) => {
  const [dropInvestment, setDropInvestment] = useState(false);
  const [stakeValue, setStakekValue] = useState("");
  
  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="w-screen h-screen absolute text-black top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center p-3"
      onClick={handleOuterClick}
    >
      <div className="bg-white shadow-md rounded-md p-5 flex flex-col gap-3 w-full md:w-[500px]">
        <div className="flex justify-between w-full">
          <p className="font-bold text-xl">{user.firstName} {user.lastName}</p>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[8px] text-center">User level</p>
            {user.rank == UserRank.ASSOCIATE_GROUP_LEADER && <p className="text-center text-xs font-semibold">Associate Group Ambassador</p>}
            {user.rank == UserRank.GROUP_LEADER && <p className="text-center text-xs font-semibold">Group Leader</p>}
            {user.rank == UserRank.ASSOCIATE_MASTER_LEADER && <p className="text-center text-xs font-semibold">Associate Master Leader</p>}
            {user.rank == UserRank.MASTER_LEADER && <p className="text-center text-xs font-semibold">Master Leader</p>}
            {user.rank == UserRank.ASSOCIATE_LEADING_LEADER && <p className="text-center text-xs font-semibold">Associate Leading Leader</p>}
            {user.rank == UserRank.LEADING_LEADER && <p className="text-center text-xs font-semibold">Leading Leader</p>}
            {user.rank == UserRank.CROWN_LEADER && <p className="text-center text-xs font-semibold">Crown Leader</p>}
            {user.rank == UserRank.PRINCE_OF_OMNI_STOCK && <p className="text-center text-xs font-semibold">Prince of Omni Stock</p>}
            {user.rank == UserRank.USER && <p className="text-center text-xs font-semibold">User</p>}
          </div>
          <div
            className="text-black cursor-pointer"
            onClick={closeModal}
          >
            <CgClose size={20} />
          </div>
        </div>

        <div
          className="bg-light bg-opacity-60 rounded-md p-2 flex justify-between"
        >
          <div>
            <p className="font-semibold">User Balance</p>
            <p>${formatMoney(user.balance)}</p>
          </div>
          <div>
            <p className="font-semibold">Total User's Investments</p>
            <p>${formatMoney(user.investments.filter(invest => invest.type === "investment").reduce((amount, invest) => amount+invest.amount, 0))}</p>
          </div>
        </div>

        <div
          className="bg-light bg-opacity-60 rounded-md p-2"
        >
          <div className="flex justify-between">
            <p className="font-semibold">User Investments ({user.investments.length})</p>
            <div
              className="my-auto"
              onClick={() => setDropInvestment(!dropInvestment)}
            >
              <IoIosArrowDown size={20} />
            </div>
          </div>

          {dropInvestment && <div>
            {user.investments.length === 0 ? (
              <div className="w-full">
                <p className="text-center">No investments found</p>
              </div>
            ) :
            <table className="w-full mt-2">
              <thead>
                <tr>
                  <th className="text-left">S/N</th>
                  <th className="text-left">Amount</th>
                  <th className="text-left">Amount Returned</th>
                  <th className="text-left">Ceiling</th>
                  <th className="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {user.investments.map((invest, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{invest.amount}</td>
                    <td>{invest.amountReturned}</td>
                    <td>{invest.amount*3}</td>
                    <td>
                      <button className="text-blue-500">Stop</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
          </div>}
        </div>

        {/* ================ STAKEK FOR USER ==================== */}
        <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-2">
          <CustomInput
            place="Enter amount to stake for user"
            value={stakeValue}
            setValue={setStakekValue}
          />
          <button
            className={`h-12 w-full flex items-center rounded-md justify-center disabled:bg-light disabled:bg-opacity-70 disabled:cursor-not-allowed disabled:text-black bg-primary cursor-pointer text-white font-semibold`}
            disabled={stakeValue == "" || isNaN(+stakeValue)}
          >Invest for {user.firstName}</button>
        </form>
      </div>
    </div>
  )
}

export default UserDetails