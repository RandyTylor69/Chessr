import "./Table.css";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Table() {
  const [tableData, setTableData] = useState();

  const fetchData = async (url: string) => {
    try {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": import.meta.env
            .VITE_BACKEND_API_OPENING_WINRATE_URL,
        },
      });
      if (!res.ok) {
        throw new Error(`Error: Response Status ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    console.log(import.meta.env.VITE_BACKEND_API_OPENING_WINRATE_URL);
    fetchData(import.meta.env.VITE_BACKEND_API_OPENING_WINRATE_URL);
  }, []);

  /*   const query = useQuery({
    queryFn: () => fetchData(import.meta.env.VITE_BACKEND_API_OPENING_WINRATE_URL),
    queryKey: ["openings"],
  }); */

  return (
    <table>
      <thead></thead>
    </table>
  );
}
