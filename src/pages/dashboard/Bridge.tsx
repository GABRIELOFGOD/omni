import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Investment, UserRank } from "../../utils/index.d";
import InvestmentContractDropdown from "../../components/dashboard/InvestmentContractDropdown";
import InvestmentContractClaim from "../../components/dashboard/InvestmentContractClaim";

export const getSafeValue = (value: any): number => {
  return typeof value === "number" ? value : parseFloat(value || "0");
}

const Bridge = () => {
  const { getUserData, userData } = useAuth();
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      setInvestments(userData.investments);
    }
  }, [userData]);
  
  return (
    <div className="md:p-10 flex flex-col gap-5 p-3">
      <div>
        <p className="text-lg font-semibold">Staking Activities</p>
        <div>
          {
            !investments.length ?
            <p className="text-center text-neutral-400 py-5">No staking found</p> :
            <div className="flex flex-col gap-3">
              {
                investments.map((investment, index) => (
                  <InvestmentContractDropdown key={index} index={index} investment={investment} />
                ))
              }
            </div>
          }
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 bg-light rounded-md p-2 bg-opacity-20">
        <p className="text-lg font-semibold">Current Rank:</p>
        {userData?.rank === UserRank.USER && <p className="text-2xl font-bold uppercase text-center">USER</p>}
        {userData?.rank === UserRank.ASSOCIATE_GROUP_LEADER && <p className="text-2xl font-bold uppercase text-center">ASSOCIATE GROUP LEADER</p>}
        {userData?.rank === UserRank.GROUP_LEADER && <p className="text-2xl font-bold uppercase text-center">GROUP LEADER</p>}
        {userData?.rank === UserRank.ASSOCIATE_MASTER_LEADER && <p className="text-2xl font-bold uppercase text-center">ASSOCIATE MASTER LEADER</p>}
        {userData?.rank === UserRank.MASTER_LEADER && <p className="text-2xl font-bold uppercase text-center">MASTER LEADER</p>}
        {userData?.rank === UserRank.ASSOCIATE_LEADING_LEADER && <p className="text-2xl font-bold uppercase text-center">ASSOCIATE LEADING LEADER</p>}
        {userData?.rank === UserRank.LEADING_LEADER && <p className="text-2xl font-bold uppercase text-center">LEADING LEADER</p>}
        {userData?.rank === UserRank.CROWN_LEADER && <p className="text-2xl font-bold uppercase text-center">CROWN LEADER</p>}
        {userData?.rank === UserRank.PRINCE_OF_OMNI_STOCK && <p className="text-2xl font-bold uppercase text-center">PRINCE OF OMNI STOCK</p>}
      </div>

      <div>
        <p className="text-lg font-semibold">Staking Rewards</p>
        <div className="flex flex-col gap-3">
          {
            investments.map((investment, index) => (
              <InvestmentContractClaim key={index} index={index} investment={investment} />
            ))
          }
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">Profit Share Income</p>
        <div className="flex flex-col gap-3">
          <div className="bg-light rounded-md px-2 py-4 bg-opacity-20">
            <div className="flex justify-between items-center py-2">
              <p>Total Profit Share</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Available for Claim</p>
              <p> ${userData?.claimable}</p>
            </div>
            <button
              className={` text-white rounded-md px-3 py-3 ${userData?.claimable == 0.0000 ? "bg-opacity-50 w-full cursor-not-allowed bg-gray-300" : "bg-primary"}`}
              onClick={() => console.log("Claiming investment")}
            >
              claim
            </button>
          </div>

        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">One Dollar Magic</p>
        <div className="flex flex-col gap-3">
          <div className="bg-light rounded-md px-2 py-4 bg-opacity-20">
            <div className="flex justify-between items-center py-2">
              <p>Total Income Earned</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Available for Claim</p>
              <p> ${userData?.claimable}</p>
            </div>
            <button
              className={` text-white rounded-md px-3 py-3 ${userData?.claimable == 0.0000 ? "bg-opacity-50 w-full cursor-not-allowed bg-gray-300" : "bg-primary"}`}
              onClick={() => console.log("Claiming investment")}
            >
              claim
            </button>
          </div>

        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">Promotion Income</p>
        <div className="flex flex-col gap-3">
          <div className="bg-light rounded-md px-2 py-4 bg-opacity-20">
            <div className="flex justify-between items-center py-2">
              <p>Total Income Earned</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Available for Claim</p>
              <p> ${userData?.claimable}</p>
            </div>
            <button
              className={` text-white rounded-md px-3 py-3 ${userData?.claimable == 0.0000 ? "bg-opacity-50 w-full cursor-not-allowed bg-gray-300" : "bg-primary"}`}
              onClick={() => console.log("Claiming investment")}
            >
              claim
            </button>
          </div>

        </div>
      </div>
      
      <div>
        <p className="text-lg font-semibold">BOA</p>
        <div className="flex flex-col gap-3">
          <div className="bg-light rounded-md px-2 py-4 bg-opacity-20">
            <div className="flex justify-between items-center py-2">
              <p>Total Income Earned</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Available for Claim</p>
              <p> ${userData?.claimable}</p>
            </div>
            <button
              className={` text-white rounded-md px-3 py-3 ${userData?.claimable == 0.0000 ? "bg-opacity-50 w-full cursor-not-allowed bg-gray-300" : "bg-primary"}`}
              onClick={() => console.log("Claiming investment")}
            >
              claim
            </button>
          </div>

        </div>
      </div>
      
      <div>
        <div className="flex justify-between w-full">
          <p className="text-lg font-semibold">Reward by Rank</p>
          <p className="text-sm my-auto text-red-500">Not-Eligible</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-light rounded-md px-2 py-4 bg-opacity-20">
            <div className="flex justify-between items-center py-2">
              <p>Total Income Earned</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Available for Claim</p>
              <p> ${userData?.claimable}</p>
            </div>
            <button
              className={` text-white rounded-md px-3 py-3 ${userData?.claimable == 0.0000 ? "bg-opacity-50 w-full cursor-not-allowed bg-gray-300" : "bg-primary"}`}
              onClick={() => console.log("Claiming investment")}
            >
              claim
            </button>
          </div>

        </div>
      </div>
      
      <div>
        <div className="flex justify-between w-full">
          <p className="text-lg font-semibold">Salary</p>
          <p className="text-sm my-auto text-red-500">Not-Eligible</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-light rounded-md px-2 py-4 bg-opacity-20">
            <div className="flex justify-between items-center py-2">
              <p>Total Income Earned</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Available for Claim</p>
              <p> ${userData?.claimable}</p>
            </div>
            <button
              className={` text-white rounded-md px-3 py-3 ${userData?.claimable == 0.0000 ? "bg-opacity-50 w-full cursor-not-allowed bg-gray-300" : "bg-primary"}`}
              onClick={() => console.log("Claiming investment")}
            >
              claim
            </button>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Bridge