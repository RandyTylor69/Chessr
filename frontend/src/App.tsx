import "./App.css";
import Header from "./components/Header.tsx";
import Table from "./components/Table.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// using TanStack Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="layout-wrapper">
        <Header />
        <Table />
      </div>
    </QueryClientProvider>
  );
}

export default App;
