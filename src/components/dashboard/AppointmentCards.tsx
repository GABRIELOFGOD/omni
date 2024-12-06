// import { BsWalletFill } from "react-icons/bs"
// import useAuth from "../../hooks/useAuth";
// import { useEffect } from "react";

// const AppointmentCards = () => {
//   const { userData, getUserData } = useAuth();

//   useEffect(() => {
//     getUserData();
//   }, []);

//   const formatMoney = (amount: number) => {
//     return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   };
  
//   return (
//     <div className="flex flex-col md:flex-row gap-1 w-full justify-between">
//       <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
//         <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
//         <div>
//           <p className="text-light">Total investment</p>
//           <p className=" font-bold text-2xl">
//             ${formatMoney(userData?.investments.reduce((acc, investment) => acc + investment.amount, 0) || 0)}
//           </p>
//           <p className="text-xs text-light">Your total investment value to Omni stock</p>
//         </div>
//       </div>
//       <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
//         <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
//         <div>
//           <p className="text-light">Trading Balance</p>
//           <p className=" font-bold text-2xl">
//             ${formatMoney(userData?.tradingBalance ? parseFloat(userData.tradingBalance.toFixed(2)) : 0)}
//           </p>
//           <p className="text-xs text-light">Your total value from all farms, pools and InSpirit</p>
//         </div>
//       </div>
//       <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
//         <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
//         <div>
//           <p className="text-light">Funding account</p>
//           <p className=" font-bold text-2xl">
//             ${formatMoney(userData?.balance ? parseFloat(userData.balance.toFixed(2)) : 0)}
//           </p>
//           <p className="text-xs text-light">Your total value from all farms, pools and InSpirit</p>
//         </div>
//       </div>
//       <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
//         <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
//         <div>
//           <p className="text-light">Bonus balance</p>
//           <p className=" font-bold text-2xl">
//             ${formatMoney(userData?.claimable ? parseFloat(userData.claimable.toFixed(2)) : 0)}
//           </p>
//           <p className="text-xs text-light">Your total value from all farms, pools and InSpirit</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AppointmentCards

import { BsWalletFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

export const formatMoney = (amount: number | string): string => {
  const parsedAmount = typeof amount === "number" ? amount : parseFloat(amount || "0");
  return parsedAmount
    .toFixed(2) // Ensure two decimal places
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format with commas
};

const AppointmentCards = () => {
  const { userData, getUserData } = useAuth();

  useEffect(() => {
    getUserData();
  }, []);


  const getSafeValue = (value: any): number => {
    return typeof value === "number" ? value : parseFloat(value || "0");
  };

  return (
    <div className="flex flex-col md:flex-row gap-1 w-full justify-between">
      <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
        <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
        <div>
          <p className="text-light">Total investment</p>
          <p className="font-bold text-2xl md:text-xl">
            ${formatMoney(userData?.investments?.reduce((acc, investment) => acc + getSafeValue(investment.amount), 0) || 0)}
          </p>
          <p className="text-xs text-light">Your total investment value to Omni stock</p>
        </div>
      </div>
      <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
        <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
        <div>
          <p className="text-light">Trading Balance</p>
          <p className="font-bold text-2xl">
            ${formatMoney(getSafeValue(userData?.tradingBalance))}
          </p>
          <p className="text-xs text-light">Total amount available for trading</p>
        </div>
      </div>
      <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
        <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
        <div>
          <p className="text-light">Funding account</p>
          <p className="font-bold text-2xl">
            ${formatMoney(getSafeValue(userData?.balance))}
          </p>
          <p className="text-xs text-light">Your total value from all farms, pools and InSpirit</p>
        </div>
      </div>
      <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
        <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
        <div>
          <p className="text-light">Bonus balance</p>
          <p className="font-bold text-2xl">
            ${formatMoney(getSafeValue(userData?.claimable))}
          </p>
          <p className="text-xs text-light">Your total value from all farms, pools and InSpirit</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCards;
