import { Circles } from "react-loader-spinner"

export interface LoaderProps {
  height?: number;
  width?: number;
}

const Loader = (loader: LoaderProps) => {
  return (
    <div className="flex h-screen fixed w-full justify-center items-center left-0 top-0 bg-white bg-opacity-80">
      <Circles
        height={loader.height || 80}
        width={loader.width || 80}
        color="#35B9C0"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loader