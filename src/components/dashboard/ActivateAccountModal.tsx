import { toast } from "sonner"
import useInvestment from "../../hooks/useInvestment"
import MiniLoading from "../primary/MiniLoading"

const ActivateAccountModal = ({
  open,
  setOpen
}:
{
  open: boolean,
  setOpen: (open: boolean) => void
}) => {

  const closeModal = () => {
    setOpen(false)
  }

  const { isLoading, error, activate } = useInvestment();

  const activateAccount = async () => {
    const res = await activate(20);
    if (res.status && res.status !== "success") {
      toast.error(res.message || "Activation failed");
    } else {
      toast.success("Activation successful");
      location.reload();
    }
  }

  if (error) toast.error(error);
  
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 justify-center items-center ${open ? "flex" : "hidden"}`}
      onClick={closeModal}
    >
      <div
        className="bg-white p-5 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-center text-black">Please activate your account with $20</p>
        <div className="flex gap-5 justify-center mt-5">
          <button
            onClick={activateAccount}
            className={`bg-primary text-white px-5 py-2 flex justify-center items-center relative w-[100px] rounded-md ${isLoading ? "cursor-not-allowed" : ""}`}
          >
            {isLoading ? <MiniLoading color="#ffffff" /> : "Activate"}
          </button>
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-5 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>      
    </div>
  )
}

export default ActivateAccountModal