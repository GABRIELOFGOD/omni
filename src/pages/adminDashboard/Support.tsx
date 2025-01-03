
import useTickets from "../../hooks/useTicket";
import { toast } from "sonner";
import TicketList from "../../components/TicketList";

const Support = () => {
  
  const { tickets, error, loading } = useTickets();

  if (error) toast.error(error);
  
  return (
    <div className="flex gap-5 text-black h-full">
      {/* <div className="bg-white rounded-md p-5 w-full">
        <p className="text-xl font-bold ">User tickets</p>
        {loading && <div className="w-full h-[200px] flex justify-center items-center">
            <Loader />
          </div>}
        {tickets.map((ticket, i) => (
          <div key={i} className="bg-white p-3 rounded-md my-2">
            
          </div>
        ))}
      </div> */}
      <TicketList
        tickets={tickets}
        loading={loading}
      />
    </div>
  )
}

export default Support