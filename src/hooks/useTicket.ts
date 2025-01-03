import { useEffect, useState } from "react";
import { TicketData } from "../utils/index.d";

const fetchTickets = async () => {
  try {
    const request = await fetch('/tickets.json');
    console.log("tickets", request);
    const tickets = await request.json();
    return tickets;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}

const useTickets = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTickets()
      .then((tickets) => {
        setTickets(tickets);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { tickets, loading, error };
}

export default useTickets;