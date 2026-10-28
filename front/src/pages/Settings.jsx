import { Link } from "react-router-dom";

export function Settings() {
    return (
        <div className="m-7"> 
            <header className="flex items-center justify-between p-4 ">
                <div className="flex items-center gap-3">
                    <img src="/images/WalletIcon.png" alt="Logo" className="w-20 h-13" />
                    <span>Finance Tracker</span>
                </div>
                <nav className="flex gap-4">
                    <Link className="px-5 py-2" to="/">Overview</Link>
                    <Link to="/transactions" className="px-5 py-2">Transactions</Link>
                    <Link to="/settings" className="rounded-full bg-gray-100 px-5 py-2">Settings</Link>
                </nav>
                <div className="rounded-full bg-gray-200 w-7 h-7 flex items-center justify-center">
                    <button>K</button>
                </div>
            </header>
        </div>

    )
}