import { toast } from "sonner";
import useInvestment from "../../hooks/useInvestment"
import { formatMoney } from "./AppointmentCards"
import { InvestmentContractDropdownProps } from "./InvestmentContractDropdown"
import MiniLoading from "../primary/MiniLoading";

const InvestmentContractClaim = ({index, investment}: InvestmentContractDropdownProps) => {
  const { isLoading, claim, error } = useInvestment();

  if (error) {
    toast.error(error);
  }

  const handleClaim = async () => {
    try {
      const claimer = await claim(investment.id);
      if (claimer.status && claimer.status === "success") {
        toast.success("Claim successful");
        location.reload();
      } else {
        toast.error(claimer.message || "An error occurred, please try again");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred, please try again");
    }
  }
  
  return (
    <div>
      <div className="bg-light rounded-md p-2 bg-opacity-20">
        <div className="flex justify-between items-center py-2">
          <p>Contract {index+1}</p>
          <button
            className={` text-white relative flex justify-center items-center w-[130px] rounded-md px-3 py-2 ${investment.availableAmount == 0.0000 ? "bg-opacity-50 cursor-not-allowed bg-gray-300" : "bg-primary"}`}
            onClick={handleClaim}
          >
            {isLoading ? <MiniLoading color="#ffff" width={25} height={25} /> : `claim ${formatMoney(investment.availableAmount)}`}
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvestmentContractClaim