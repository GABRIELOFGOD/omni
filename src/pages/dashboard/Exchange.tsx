import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { UserData } from "../../utils";

const Exchange = () => {
  const [refLevel, setRefLevel] = useState<number>(1);
  const [userTeam, setUserTeam] = useState<UserData[]>([]);
  
  const { getTeamData, team } = useUser();

  useEffect(() => {
    getTeamData();
  }, []);

  useEffect(() => {
    if (team) {
      setUserTeam(team);
    }
  }, [team]);
  
  return (
    <div className="py-10 flex flex-col gap-5">
      <div className="flex justify-between flex-col md:flex-row gap-5">
        <div className="bg-light bg-opacity-20 flex flex-col gap-3 w-full rounded-md p-4">
          <h1 className="text-center">Active Team Members</h1>
          <p className="text-2xl font-bold text-center">
            {team?.filter(member => member.accountActivated).length}
          </p>
        </div>
        <div className="bg-light bg-opacity-20 flex flex-col gap-3 w-full rounded-md p-4">
          <h1 className="text-center">Total Invested Members</h1>
          <p className="text-2xl font-bold text-center">
            {team?.filter(member => member.hasActiveInvestment).length}
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <h1 className=" py-2">Team Members</h1>
          <select
            value={refLevel}
            onChange={(e) => setRefLevel(parseInt(e.target.value))}
            className="bg-dark border-none outline-none"
            name="level"
          >
            {Array.from({ length: 16 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} level
              </option>
            ))}
          </select>
        </div>
        <table className="min-w-full border border-gray-200 rounded-md">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Level</th>
              <th className="py-2">Investment</th>
            </tr>
          </thead>
          <tbody>
            {!userTeam.length || userTeam.length === 0 ?
              <tr>
                <td colSpan={3} className="text-center text-gray-400">No Referrals</td>
              </tr> :
              userTeam.map((member, index) => (
              <tr key={index} className="text-center">
                <td className="py-2">{member.firstName}</td>
                <td className="py-2">1</td>
                {team && <td className="py-2">{member.investments.filter(invested => invested.type === "investment").reduce((amount, invest) => amount+invest.amount, 0)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Exchange