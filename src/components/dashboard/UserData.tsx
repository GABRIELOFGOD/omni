import { useEffect } from "react";
import { BiEdit, BiUserCircle } from "react-icons/bi"
import useAuth from "../../hooks/useAuth";

const UserDataComponent = () => {
  const { userData, getUserData } = useAuth();

  useEffect(() => {
    getUserData();
  }, []);
  
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full bg-primary bg-opacity-10 md:p-10 p-3 rounded-md relative py-5">
      <div className="flex absolute top-2 right-2 border-primary border-opacity-50 bg-primary bg-opacity-15 py-1 px-2 rounded-sm gap-2">
        <div className="my-auto">
          <BiEdit size={20} />
        </div>
        <p className="my-auto text-lg">Edit</p>
      </div>
      <div className="w-full flex pb-5 justify-center">
        <div className={`rounded-full w-fit p-2 text-6xl md:text-8xl my-auto bg-dark border ${userData?.accountActivated ? 'border-green-500' : 'border-red-500'}`}>
          <BiUserCircle />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 justify-between w-full">
          <p className="font-bold text-primary flex-1 md:text-lg">Name:</p>
          <p className=" font-semibold md:text-lg flex-[2]">
            {userData?.firstName} {userData?.lastName}
          </p>
        </div>
        <div className="flex gap-5 justify-between w-full">
          <p className="font-bold text-primary flex-1 md:text-lg">Email:</p>
          <p className=" font-semibold md:text-lg flex-[2]">
            {userData?.email}
          </p>
        </div>
        <div className="flex gap-5 justify-between w-full">
          <p className="font-bold text-primary flex-1 md:text-lg">User ID</p>
          <p className=" font-semibold md:text-lg flex-[2]">
            {userData?.referralCode}
          </p>
        </div>
        <div className="flex gap-5 justify-between w-full">
          <p className="font-bold text-primary flex-1 md:text-lg">Country:</p>
          <p className=" font-semibold md:text-lg flex-[2]">
            {userData?.country}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserDataComponent