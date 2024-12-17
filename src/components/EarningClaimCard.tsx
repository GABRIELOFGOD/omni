import { useState } from "react";
import { Earning, EarningStatus } from "../utils/index.d";

interface EarningClaimCardProps {
  title: string;
  claimFunction: () => void;
  claimData: Earning[];
  isClaiming: boolean;
}

const formatDate = (dateInput: string): string => {
  const date = new Date(dateInput); // Convert the string to a Date object
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;

  if (diff < oneDay) {
    return `Today, at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
  } else if (diff < 2 * oneDay) {
    return `Yesterday, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
  } else if (diff < oneWeek) {
    return `${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
  } else {
    return `${date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
  }
};

const EarningClaimCard = ({ title, claimFunction, claimData, isClaiming }: EarningClaimCardProps) => {
  const [openEarn, setOpenEarn] = useState(false);
  
  return (
    <div
      className="bg-primary p-4 rounded-md cursor-pointer bg-opacity-10 h-fit w-full"
    >
      <div className="flex justify-between">
      <p className="text-white font-semibold my-auto text-lg md:text-xl" onClick={() => setOpenEarn(!openEarn)}>{title}</p>
      <button
        className={`bg-primary text-white px-4 my-auto py-2 rounded-md ${isClaiming ? "cursor-not-allowed opacity-30" : "hover:bg-primary-dark opacity-100"}`}
        onClick={isClaiming ? () => {} : claimFunction}
      >
        {isClaiming ? "Claiming..." : "Claim"}
      </button>
      </div>

      {openEarn && (
      <div className="mt-4">
        {claimData.length > 9 ? (
        <div>
          {claimData.slice(0, 9).reverse().map((data, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="text-white">{formatDate(data.createdAt.toString())}</p>
            {data.status === EarningStatus.CLAIMED && <p className="text-green-500">{data.status}</p>}
            {data.status === EarningStatus.PENDING && <p className="text-yellow-500">{data.status}</p>}
            {data.status === EarningStatus.EXPIRED && <p className="text-red-500">{data.status}</p>}
            {data.status === EarningStatus.CANCELLED && <p className="text-red-500">{data.status}</p>}
            <p className="text-white">{data.amount}</p>
          </div>
          ))}
            <p className="text-white mt-4">Showing {Math.min(9, claimData.length)} of {claimData.length} items</p>
        </div>
        ) : (
        claimData.reverse().map((data, index) => (
          <div key={index} className="flex justify-between items-center">
          <p className="text-white">{formatDate(data.createdAt.toString())}</p>
          <p className="text-white">{data.amount}</p>
          {data.status === EarningStatus.CLAIMED && <p className="text-green-500 capitalize">{data.status}</p>}
          {data.status === EarningStatus.PENDING && <p className="text-yellow-500">Not claimed</p>}
          {data.status === EarningStatus.EXPIRED && <p className="text-red-500 capitalize">{data.status}</p>}
          {data.status === EarningStatus.CANCELLED && <p className="text-red-500 capitalize">{data.status}</p>}
          </div>
        ))
        )}
      </div>
      )}
      {/* {claimData.length > 9 && (
        <div className="flex justify-between mt-4">
          <button
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        onClick={() => {
          // Logic to go to the previous page
        }}
          >
        Previous
          </button>
          <button
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        onClick={() => {
          // Logic to go to the next page
        }}
          >
        Next
          </button>
        </div>
      )} */}
      
    </div>
  )
}

export default EarningClaimCard