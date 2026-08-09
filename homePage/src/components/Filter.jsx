export default function Filter({ sort, setSort }) {
    return (
        <>
            <div className="w-full border border-neutral-300 px-4 py-2 flex items-center">
                <select className="w-15 bg-transparent text-sm text-neutral-600 outline-none appearance-none font-medium" onChange={(e) => setSort(e.target.value)} value={sort}>
                    <option value="">FILTER</option>
                    <option value="-createdAt">Terbaru</option>
                    <option value="createdAt">Terlama</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                    fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5h18v2H3zm2.5 6h13v2h-13zM8 17h8v2H8z"></path>
                </svg>
            </div>
        </>
    )
}