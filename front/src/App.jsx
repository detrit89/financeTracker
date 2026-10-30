import { Routes, Route} from "react-router-dom";
import { Transactions } from "./pages/Transactions";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { useState, useEffect } from "react";


export function App() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark"
    });
    useEffect(() => {
        localStorage.setItem("theme", darkMode ? "dark" : "light" )
    }, [darkMode])
    return (
        <div className={darkMode ? "dark min-h-screen bg-slate-950 text-white" : "min-h-screen bg-white text-slate-900"}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />} />
            </Routes>
        </div>
    )
}