import { useState } from "react";
import CustomInput from "../../components/CustomInput";

const AdminControl = () => {
  const [dailyROI, setDailyROI] = useState<string>("0.5");

  return (
    <div className="text-black flex flex-col gap-5 h-full">
      <div className="bg-white rounded-md p-5 w-full flex flex-col gap-3">
        <p className="text-xl font-bold ">Admin Control</p>
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm font-bold">Daily ROI</p>
          <CustomInput
            place="Daily ROI (in percentage)"
            value={dailyROI.toString()}
            setValue={setDailyROI}
          />
          <button
            className={`h-12 w-full flex items-center rounded-md justify-center disabled:bg-light disabled:bg-opacity-70 disabled:cursor-not-allowed disabled:text-black bg-primary cursor-pointer text-white font-semibold`}
            disabled={dailyROI == "" || isNaN(+dailyROI)}
          >Set Daily ROI</button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm font-bold">Promotional Return</p>
          <CustomInput
            place="Daily ROI (in percentage)"
            value={dailyROI.toString()}
            setValue={setDailyROI}
          />
          <button
            className={`h-12 w-full flex items-center rounded-md justify-center disabled:bg-light disabled:bg-opacity-70 disabled:cursor-not-allowed disabled:text-black bg-primary cursor-pointer text-white font-semibold`}
            disabled={dailyROI == "" || isNaN(+dailyROI)}
          >Set Promotion return</button>
        </div>
      </div>
      <div className="flex w-full gap-2">
        <div className="w-full bg-primary bg-opacity-20 p-3 rounded-md flex flex-col gap-3">
          <p className="text-lg font-semibold">Upload Advert</p>
          <div className="flex gap-3">
            <input
              type="file"
              className="w-full h-12 px-3 rounded-md border-2 border-primary"
            />
            <button
              className="h-12 w-24 bg-primary text-white font-semibold rounded-md"
            >Upload</button>
          </div>
        </div>
        <div className="w-full bg-primary bg-opacity-20 p-3 rounded-md flex flex-col gap-3">
          <p className="text-lg font-semibold">Send Notification</p>
          <form onSubmit={e=> e.preventDefault()}>
            <textarea
              name=""
              id=""
              className="w-full h-24 px-3 rounded-md border-2 border-primary"
            ></textarea>
            <button
              className="h-12 w-24 bg-primary text-white font-semibold rounded-md"
            >Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminControl