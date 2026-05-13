import "./Table.css";
import { useQuery } from "@tanstack/react-query";
export default function Table() {
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
      return data;
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const { data: winrates, isLoading } = useQuery({
    queryFn: () =>
      fetchData(import.meta.env.VITE_BACKEND_API_OPENING_WINRATE_URL),
    queryKey: ["openings"],
  });

  if (isLoading) {
    return (
      <div>
        <p>Data Loading</p>
      </div>
    );
  }

  return (
    <table>
      <thead>
        {headers.map((header) => (
          <th key={header.id}>
            <h1 className="table-header">{header.label}</h1>
          </th>
        ))}
      </thead>
      <tbody>
        {winrates.map((row: any, index: number) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header.id}>{row[header.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const headers = [
  { id: 1, label: "Opening", key: "opening" },
  { id: 2, label: "Color", key: "color" },
  { id: 3, label: "Games", key: "games_count" },
  { id: 4, label: "Winrate", key: "winrate" },
];
