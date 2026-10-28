import { Routes, Route} from "react-router-dom";
import { Transactions } from "./pages/Transactions";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";


export function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}