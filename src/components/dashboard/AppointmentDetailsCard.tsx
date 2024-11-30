import { FaCreativeCommonsSa } from "react-icons/fa"
import { candlestickData } from "../../utils/chartData"
import CandlestickChart from "../chart/CandlestickChart"

const AppointmentDetailsCard = () => {
  return (
    <div className="flex gap-3 w-full flex-col md:flex-row justify-between">
      <div className="p-5 bg-primary flex flex-col gap-3 bg-opacity-5 w-full">
        <p className="pb-5 font-bold text-xl">Omnicoin data</p>
        <div className="flex gap-2 flex-col">
          <div className="flex text-light justify-between">
            <p>Token price</p>
            <p>$100</p>
          </div>
          <div className="flex text-light justify-between">
            <p>Market cap</p>
            <p>$100</p>
          </div>
          <div className="flex text-light justify-between">
            <p>Circulating supply</p>
            <p>$100</p>
          </div>
          <div className="flex text-light justify-between">
            <p>Total supply</p>
            <p>$100</p>
          </div>
          <div className="flex text-light justify-between">
            <p>Token mined</p>
            <p>$100</p>
          </div>
          <div className="flex text-light justify-between">
            <p>Ominicoin hold</p>
            <p>$100</p>
          </div>
        </div>
        <div className="flex w-full gap-1 justify-between">
          <button className="w-full py-3 border-2 flex justify-center items-center gap-3 text-primary font-bold border-primary hover:border-light hover:text-light duration-200 rounded-md">
            <div className="my-auto"><FaCreativeCommonsSa /></div>
            <span className="my-auto">Buy Omnicoin</span>
          </button>
          <button className="w-full py-3 border-2 flex justify-center items-center gap-3 text-primary font-bold border-primary hover:border-light hover:text-light duration-200 rounded-md">
            {/* <div className="my-auto"><FaCreativeCommonsSa /></div> */}
            <span className="my-auto">View on coin geco</span>
          </button>
        </div>
      </div>
      <div className="p-5 bg-primary bg-opacity-5 w-full">
        <p className="pb-5 font-bold text-xl">Omnicoin chart</p>
        <CandlestickChart data={candlestickData} />
      </div>
    </div>
  )
}

export default AppointmentDetailsCard