import { useEffect, useState } from "react";

export const formatMoney = (amount: number | string): string => {
  const parsedAmount = typeof amount === "number" ? amount : parseFloat(amount || "0");
  return parsedAmount
    .toFixed(2) // Ensure two decimal places
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format with commas
};

const AppointmentCards = () => {
  // const { userData, getUserData } = useAuth();

  // useEffect(() => {
  //   getUserData();
  // }, []);


  // const getSafeValue = (value: any): number => {
  //   return typeof value === "number" ? value : parseFloat(value || "0");
  // };

  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const [minutes, seconds] = prevTime.split(":").map(Number);
        const newSeconds = (seconds + 1) % 60;
        const newMinutes = newSeconds === 0 ? minutes + 1 : minutes;
        return `${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-1 w-full justify-between">
      {/* <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
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
      </div> */}
      <div className="flex gap-3 justify-between rounded-sm w-full px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
        <p className="text-xl font-bold ">Server running time</p>
        <p className="text-xl font-bold text-primary">{time}</p>
      </div>
    </div>
  );
};

export default AppointmentCards;
