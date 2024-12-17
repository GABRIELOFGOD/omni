import { formatMoney } from "./AppointmentCards"
import { InvestmentContractDropdownProps } from "./InvestmentContractDropdown"

const InvestmentContractClaim = ({index, investment}: InvestmentContractDropdownProps) => {
  return (
    <div>
      <div className="bg-light rounded-md p-2 bg-opacity-20">
        <div className="flex justify-between items-center py-2">
          <p>Contract {index+1}</p>
          <button
            className={` text-white rounded-md px-3 py-1 ${investment.availableAmount == 0.0000 ? "bg-opacity-50 cursor-not-allowed bg-gray-300" : "bg-primary"}`}
            onClick={() => console.log("Claiming investment")}
          >
            claim ${formatMoney(investment.availableAmount)}
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvestmentContractClaim