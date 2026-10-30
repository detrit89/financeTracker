import { Link } from "react-router-dom";


export function Settings({darkMode, setDarkMode}) {
    return (
        <div className="mx-auto w-full min-h-screen max-w-[1600px] px-4 pb-6 sm:px-6 lg:px-7  bg-white dark:bg-slate-950"> 
            <header className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-4 bg-white py-3 dark:bg-slate-950 sm:mb-6 sm:p-4">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <img src="/images/WalletIcon.png" alt="Logo" className="h-10 w-14 shrink-0 object-contain sm:h-13 sm:w-20" />
                    <span className="text-sm sm:text-base text-slate-900 dark:text-white">Finance Tracker</span>
                </div>
                <nav className="order-last grid w-full grid-cols-3 gap-1 md:order-none md:flex md:w-auto md:gap-4">
                    <Link to="/" className="flex min-h-11 items-center justify-center px-2 py-2 text-sm sm:px-5 sm:text-base dark:text-white">Overview</Link>
                    <Link to="/transactions" className="flex min-h-11 items-center justify-center px-2 py-2 text-sm sm:px-5 sm:text-base dark:text-white">Transactions</Link>
                    <Link to="/settings" className="flex min-h-11 items-center justify-center px-2 py-2 text-sm sm:px-5 sm:text-base rounded-full bg-gray-100 dark:text-white dark:bg-slate-800">Settings</Link>
                </nav>
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-slate-800 dark:text-white">
                    <button type="button" className="size-full">K</button>
                </div>
            </header>
            <div>
                <button
                    type="button"
                    onClick={() => setDarkMode(prev => !prev)}
                    className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>

            </div>
        </div>

    )
}