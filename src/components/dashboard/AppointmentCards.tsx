import { BsWalletFill } from "react-icons/bs"

const AppointmentCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-1 w-full justify-between">
      <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
        <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
        <div>
          <p className="text-light">Portfolio value</p>
          <p className=" font-bold text-2xl">$16,000.56</p>
          <p className="text-xs text-light">Your total value from all farms, pools and InSpirit</p>
        </div>
      </div>
      <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
        <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
        <div>
          <p className="text-light">Portfolio value</p>
          <p className=" font-bold text-2xl">$16,000.56</p>
          <p className="text-xs text-light">Your total value from all farms, pools and InSpirit</p>
        </div>
      </div>
      <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
        <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
        <div>
          <p className="text-light">Portfolio value</p>
          <p className=" font-bold text-2xl">$16,000.56</p>
          <p className="text-xs text-light">Your total value from all farms, pools and InSpirit</p>
        </div>
      </div>
      <div className="flex gap-3 rounded-sm border border-light px-4 py-3 backdrop-blur-md bg-light bg-opacity-5">
        <div className="rounded-full p-2 my-auto bg-dark"><BsWalletFill /></div>
        <div>
          <p className="text-light">Portfolio value</p>
          <p className=" font-bold text-2xl">$16,000.56</p>
          <p className="text-xs text-light">Your total value from all farms, pools and InSpirit</p>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCards