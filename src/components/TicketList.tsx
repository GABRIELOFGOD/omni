// import { TicketData } from "../utils";

// const TicketList = ({ loading, tickets }: {loading: boolean, tickets: TicketData[]}) => {
//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg rounded-lg p-6 w-full">
//       <p className="text-2xl font-semibold text-blue-900 mb-4">User Tickets</p>

//       {loading && (
//         <div className="w-full h-[200px] flex justify-center items-center">
//           <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
//         </div>
//       )}

//       {!loading && tickets.length === 0 && (
//         <div className="text-center text-gray-600">No tickets available</div>
//       )}

//       {tickets.map((ticket, i) => (
//         <div
//           key={i}
//           className={`bg-white p-4 rounded-lg shadow-md mb-4 border-l-4 ${
//             ticket.status === "open"
//               ? "border-blue-500"
//               : ticket.status === "closed"
//               ? "border-yellow-500"
//               : "border-green-500"
//           }`}
//         >
//           <p className="text-lg font-bold text-gray-800 mb-2">{ticket.title}</p>
//           <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
//           <div className="flex justify-between items-center text-sm">
//             <span
//               className={`py-1 px-3 rounded-full text-white font-semibold ${
//                 ticket.priority === "high"
//                   ? "bg-red-500"
//                   : ticket.priority === "medium"
//                   ? "bg-yellow-500"
//                   : "bg-green-500"
//               }`}
//             >
//               {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)} Priority
//             </span>
//             <span className="text-gray-500">
//               {new Date(ticket.createdAt).toLocaleDateString()}
//             </span>
//           </div>
//           <div
//             className={`text-xs font-medium mt-2 px-2 py-1 rounded inline-block ${
//               ticket.status === "open"
//                 ? "bg-blue-100 text-blue-700"
//                 : ticket.status === "closed"
//                 ? "bg-yellow-100 text-yellow-700"
//                 : "bg-green-100 text-green-700"
//             }`}
//           >
//             {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TicketList;

import { useState } from "react";
import { TicketData } from "../utils";

const TicketList = ({
  loading,
  tickets,
}: {
  loading: boolean;
  tickets: TicketData[];
}) => {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);
  const [reply, setReply] = useState<string>("");

  const handleTicketClick = (id: number) => {
    setSelectedTicket(selectedTicket === id ? null : id);
    setReply(""); // Reset reply box when a ticket is clicked
  };

  const handleCloseTicket = (id: number) => {
    alert(`Ticket ${id} has been closed.`);
    // Add logic to update ticket status to "closed" here
    setSelectedTicket(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg rounded-lg p-6 w-full h-full overflow-y-auto">
      <p className="text-2xl font-semibold text-blue-900 mb-4">User Tickets</p>

      {loading && (
        <div className="w-full h-[200px] flex justify-center items-center">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {!loading && tickets.length === 0 && (
        <div className="text-center text-gray-600">No tickets available</div>
      )}

      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className={`bg-white p-4 rounded-lg shadow-md mb-4 border-l-4 cursor-pointer ${
            ticket.status === "open"
              ? "border-blue-500"
              : "border-yellow-500"
          }`}
          onClick={() => handleTicketClick(ticket.id)}
        >
          <p className="text-lg font-bold text-gray-800 mb-2">{ticket.title}</p>
          <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
          <div className="flex justify-between items-center text-sm">
            <span
              className={`py-1 px-3 rounded-full text-white font-semibold ${
                ticket.priority === "high"
                  ? "bg-red-500"
                  : ticket.priority === "medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)} Priority
            </span>
            <span className="text-gray-500">
              {new Date(ticket.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div
            className={`text-xs font-medium mt-2 px-2 py-1 rounded inline-block ${
              ticket.status === "open"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
          </div>

          {selectedTicket === ticket.id && (
            <div className="mt-4">
              {ticket.status === "closed" ? (
                <p className="text-sm text-red-500 font-medium">Ticket Closed</p>
              ) : (
                <div className="flex flex-col gap-2">
                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Write your reply..."
                    className="w-full p-2 border rounded-md"
                  />
                  <button
                    onClick={() => handleCloseTicket(ticket.id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Close Ticket
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TicketList;
