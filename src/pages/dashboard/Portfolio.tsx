import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { formatMoney } from "../../components/dashboard/AppointmentCards";
import { toast } from "sonner";
import useInvestment from "../../hooks/useInvestment";
import ActivateAccountModal from "../../components/dashboard/ActivateAccountModal";

const Portfolio = () => {
  const [openActivateAccountModal, setOpenActivateAccountModal] = useState(false);
  
  const { userData, getUserData } = useAuth();
  const [referralLink, setReferralLink] = useState("");

  const [amountToBuy, setAmountToBuy] = useState<number>(0);

  const { invest, isLoading } = useInvestment();

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      setReferralLink(`${window.location.origin}?ref=${userData?.referralCode}`);
    }
  }, [userData]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard");
  };

  const triggerInvestment = async () => {
    if (amountToBuy < 20) {
      toast.error("Minimum amount to buy is $20");
      return;
    }
    const res = await invest(amountToBuy);
    if (res.status && res.status !== "success") {
      toast.error(res.message || "Investment failed");
    } else {
      toast.success("Investment successful");
      location.reload();
    }
  }
  
  return (
    <div className="bg-primary bg-opacity-5 w-full flex flex-col gap-5 h-full rounded-xl p-3 md:p-10">
      <div className="flex justify-between">
        <p className="text-lg md:text-2xl font-bold">Account status</p>
        <div className="flex">
          <div className={`h-2 w-2 rounded-full my-auto ${userData?.accountActivated ? "bg-green-500" : "bg-red-500"}`}></div>
          <p className="text-sm md:text-lg text-white ml-2 my-auto">{userData?.accountActivated ? "Active" : "Inactive"}</p>
        </div>
      </div>
      <div className={`w-full px-3 text-center py-1 text-[8px] md:text-sm font-semibold text-red-600 bg-red-200 rounded-lg ${userData?.accountActivated ? "hidden" : "flex"}`}>
        <p className="w-full text-center">Your account is inactive, please activate your account to start earning. <span onClick={() => setOpenActivateAccountModal(true)} className="font-bold underline cursor-pointer">Click here</span></p>
      </div>
      
      <div className="flex flex-col gap-10 py-5">
        <div className="flex flex-col gap-5">
          <p className="text-xl font-semibold">Omni Investmments</p>
          <div className="flex gap-3">
            <div className="my-auto">
              <img src="/static/3.png" alt="coin" className="w-[80px]" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="my-auto">
                <p className="font-semibold text-lg">Share Balance</p>
                <p className="font-bold">${formatMoney(userData?.investments.reduce((available, invest) => available+invest.amount, 0) || 0)}</p>
              </div>
              <div className="my-auto">
                <p className="font-semibold text-lg">Omni Balance</p>
                <p className="font-bold">${formatMoney(userData?.balance || 0)}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold">Buy Shares</p>
          <div className="flex gap-3 flex-col pb-5">
            <input
              type="number"
              value={amountToBuy}
              onChange={(e) => setAmountToBuy(parseFloat(e.target.value))}
              placeholder="Amount to buy"
              className="w-full p-2 rounded-md bg-dark text-primary outline-none"
            />
            <div className="flex justify-between">
              <p className="capitalize">Omni shares to receive</p>
              <p className="font-bold text-primary">{amountToBuy/20}</p>
            </div>
            <button
              onClick={triggerInvestment}
              className={`py-2 w-full md:w-fit px-6 rounded-md bg-primary text-dark font-semibold hover:bg-primary-dark ${isLoading ? "cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Processing..." : "Buy and Stake"}
            </button>
          </div>
        </div>

        <div>
          <p className={`text-lg md:text-2xl font-bold`}>Referral link</p>
          <div className="flex gap-2 flex-col md:flex-row pb-5">
            <input
              type="text"
              value={referralLink}
              onChange={(e) => setReferralLink(e.target.value)}
              disabled
              className="w-full p-2 rounded-md bg-dark text-primary outline-none"
            />
            <button
              onClick={copyToClipboard}
              className="py-2 w-full md:w-fit px-6 rounded-md bg-primary text-dark font-semibold hover:bg-primary-dark"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      
      {/* <div className={`flex flex-col gap-5`}>
        <div>
          <p className={`text-lg md:text-2xl font-bold`}>Team</p>
          <p className="font-semibold text-sm">
            Total Team: <span className="text-primary">{totalNumber}</span>
          </p>
        </div>
        <div className="flex md:px-20 md:py-10 flex-col md:flex-row justify-between  gap-3 md:gap-5">

          <div className="flex md:gap-5 flex-row justify-between bg-dark text-primary md:bg-transparent p-2 rounded-md md:text-white">
            <p className={`text-xs md:text-lg md:my-auto font-semibold flex flex-col md:flex-row gap-3`}>Active team members: <span className="text-primary md:text-lg text-4xl">{team.filter(member => member.accountActivated).length}</span></p>
            <DoughnutChart 
              color="blue" 
              percentage={(team.filter(member => member.accountActivated).length / totalNumber || 0) * 100} 
              completeLabel="Active" 
              remainingLabel="Inactive" 
            />
          </div>

          <div className="flex md:gap-5 flex-row justify-between bg-dark text-primary md:bg-transparent p-2 rounded-md md:text-white">
            <p className={`text-xs md:text-lg md:my-auto font-semibold flex flex-col md:flex-row gap-3`}>Team who has invested: <span className="text-primary md:text-lg text-4xl">{team.filter(member => member.hasActiveInvestment).length}</span></p>
            <DoughnutChart 
              color="blue" 
              percentage={(team.filter(member => member.hasActiveInvestment).length / totalNumber || 0) * 100} 
              completeLabel="Invested" 
              remainingLabel="Not Invested" 
            />
          </div>
        </div>

        <div>
          <p className={`text-lg md:text-2xl font-bold`}>Referral link</p>
          <div className="flex gap-2 flex-col md:flex-row pb-5">
            <input
              type="text"
              value={referralLink}
              onChange={(e) => setReferralLink(e.target.value)}
              disabled
              className="w-full p-2 rounded-md bg-dark text-primary outline-none"
            />
            <button
              onClick={copyToClipboard}
              className="py-2 w-full md:w-fit px-6 rounded-md bg-primary text-dark font-semibold hover:bg-primary-dark"
            >
              Copy
            </button>
          </div>
        </div>
      </div> */}
      <ActivateAccountModal open={openActivateAccountModal} setOpen={setOpenActivateAccountModal} />
    </div>
  )
}

export default Portfolio