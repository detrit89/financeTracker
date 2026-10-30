export function SummaryCard({ icon, title, amount }) {
    return (
        <div className="flex min-w-0 min-h-24 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 lg:p-5 shadow-sm">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
                {icon}
            </div>
            <div className="min-w-0">
                <h2 className="text-sm text-slate-500">{title}</h2>
                <p className="break-words text-xl font-semibold tracking-tight [overflow-wrap:anywhere] xl:text-2xl">
                    ${amount.toFixed(2)}
                </p>
            </div>
        </div>
    );
}