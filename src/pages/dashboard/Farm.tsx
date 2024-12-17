import { useEffect, useState } from "react"
import { Earning } from "../../utils"
import useAuth from "../../hooks/useAuth";

const Farm = () => {
  const [earnings, setEarnings] = useState<Earning[]>([]);

  const { getUserData, userData } = useAuth();

  useEffect(() => {
    getUserData();
    setEarnings(userData?.earningsHistory || []);
  }, []);
  
  return (
    <div className="py-5">
      <h1 className=" py-2 font-semibold text-lg text-center">Transaction History</h1>
      <table className="min-w-full border border-gray-200 rounded-md">
          <thead>
            <tr>
              <th className="py-2">User ID</th>
              <th className="py-2">Type</th>
              <th className="py-2">Level</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {!earnings.length ?
              <tr>
                <td colSpan={4} className="text-center text-gray-400">No Earnings</td>
              </tr> :
              earnings?.map((member, index) => (
              <tr key={index} className="text-center">
                <td className="py-2">{userData?.referralCode}</td>
                <td className="py-2">{member.type}</td>
                <td className="py-2">self</td>
                <td className="py-2">{member.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Farm