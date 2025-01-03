import { IoIosArrowDown } from "react-icons/io";
import { Investment } from "../../utils";
import { useState } from "react";
import { formatMoney } from "./AppointmentCards";

export interface InvestmentContractDropdownProps {
  index: number;
  investment: Investment;
}

const InvestmentContractDropdown = ({index, investment}: InvestmentContractDropdownProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div
      className="bg-light rounded-md p-2 bg-opacity-20"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div
        className="flex justify-between items-center py-2"
      >
        <p>Contract {index+1}</p>
        <IoIosArrowDown />
      </div>

      {
        showDetails &&
        <div className="flex flex-col gap-2">
          <hr />
          <p className="flex justify-between"><span>Shares:</span> <span>{investment.amount/20}</span></p>
          <p className="flex justify-between"><span>Current Earnings:</span> <span>${formatMoney(investment.amountReturned)}</span></p>
          <p className="flex justify-between"><span>Profit Limit:</span> <span>${formatMoney(investment.amount*3)}</span></p>
        </div>
      }
      
    </div>
  )
}

export default InvestmentContractDropdown