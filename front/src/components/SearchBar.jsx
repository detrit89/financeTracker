
export function SearchBar({ search, setSearch }) {
    return (
        <div className="w-full">
            <input
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                aria-label="Search transactions"
                placeholder="Search transactions..."
                className="min-h-11 w-full min-w-0 rounded-lg border border-gray-200 px-4 py-2"
            />
        </div>
    );
}