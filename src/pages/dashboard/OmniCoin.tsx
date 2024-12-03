import CandlestickChart from "../../components/chart/CandlestickChart"
import { candlestickData } from "../../utils/chartData"

const OmniCoin = () => {
  return (
    <div>
      <div className="p-5 bg-primary bg-opacity-5 w-full">
        <p className="pb-5 font-bold text-xl">Omnicoin chart</p>
        <CandlestickChart data={candlestickData} />
      </div>
    </div>
  )
}

export default OmniCoin