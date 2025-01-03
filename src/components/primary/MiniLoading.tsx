import { Circles } from "react-loader-spinner"
import { LoaderProps } from "./Loader"

const MiniLoading = (prop :LoaderProps) => {
  return (
    <div className=" w-full h-full flex justify-center items-center top-0 left-0">
      <Circles
        height={prop.height || 30}
        width={prop.width || 30}
        color={prop.color ? prop.color :"#35B9C0"}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default MiniLoading