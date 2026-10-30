import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Overview" },
    { to: "/transactions", label: "Transactions" },
    { to: "/settings", label: "Settings" },
];

export function Header() {
    return (
        <header className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-4 py-3 sm:mb-6 sm:px-2 sm:py-4">
            <NavLink to="/" aria-label="Finance Tracker home" className="flex min-w-0 items-center gap-2 sm:gap-3">
                <img src="/images/WalletIcon.png" alt="" className="h-10 w-14 shrink-0 object-contain sm:h-13 sm:w-20" />
                <span className="text-sm font-medium sm:text-base">Finance Tracker</span>
            </NavLink>
            <nav aria-label="Main navigation" className="order-last grid w-full grid-cols-3 gap-1 rounded-full bg-gray-50 p-1 md:order-none md:flex md:w-auto md:gap-2 md:bg-transparent md:p-0">
                {links.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === "/"}
                        className={({ isActive }) => `flex min-h-11 items-center justify-center rounded-full px-2 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 sm:px-5 sm:text-base ${isActive ? "bg-gray-200 text-slate-900" : "text-slate-600 hover:bg-gray-100"}`}
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
            <button type="button" aria-label="Profile" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gray-200">K</button>
        </header>
    );
}
