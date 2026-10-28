export function SummaryCard({ icon, title, amount }) {
    return (
        <div className="flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex size-12 items-center justify-center rounded-full bg-slate-100">
                {icon}
            </div>
            <div>
                <h2 className="text-sm text-slate-500">{title}</h2>
                <p className="text-2xl font-semibold tracking-tight">
                    ${amount.toFixed(2)}
                </p>
            </div>
        </div>
    );
}