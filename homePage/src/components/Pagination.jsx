export default function ({ paginationInfo, setCurrentPage, currentPage }) {
    return (
        <>
            <div aria-label="Pagination" className="flex justify-center m-15">
                <ul className="flex items-center gap-1.5">
                    {currentPage > 1 &&  <button onClick={() => setCurrentPage(currentPage-1)}>
                        <span className="flex items-center justify-center h-9 min-w-9 px-2.5 border border-neutral-200 bg-neutral-100 text-neutral-300 cursor-not-allowed text-sm">
                            «
                        </span>
                    </button>}
                    {Array.from({ length: +paginationInfo.totalPage }, (_, i) => i + 1).map((el) => (
                        <button key={el} onClick={() => setCurrentPage(el)} className={`flex items-center justify-center h-9 min-w-9 px-2.5 border text-sm ${currentPage === el
                            ? "border-blue-950 bg-blue-950 text-white font-semibold"
                            : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100"
                            }`} >
                            {el}
                        </button>
                    ))}
                    {currentPage >= 5 &&  <button onClick={() => setCurrentPage(paginationInfo.totalPage)}>
                        <span className="flex items-center justify-center h-9 min-w-9 px-2.5 border border-neutral-200 bg-neutral-100 text-neutral-300 cursor-not-allowed text-sm leading-1">
                            {paginationInfo.totalPage} <br/>
                            ...
                        </span>

                    </button>}
                    {currentPage !== paginationInfo.totalPage &&  <button onClick={() => setCurrentPage(currentPage+1)}>
                        <span className="flex items-center justify-center h-9 min-w-9 px-2.5 border border-neutral-200 bg-neutral-100 text-neutral-300 cursor-not-allowed text-sm">
                        &raquo;
                        </span>
                    </button>}
                </ul>
            </div>

        </>

    )

}