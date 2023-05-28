import React from 'react';

interface PaginationProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    page: number;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ setPage, page, totalPages }) => {
    const handleNextPage = () => {
        if (page + 1 < totalPages) {
            setPage(page + 1);
        }
    };
    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    return (
        <nav
            className="flex items-center justify-between border-t border-gray-200 bg-white px-1 py-3"
            aria-label="Pagination"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    Showing article number
                    <span className="font-medium"> {page + 1}</span> out of
                    <span className="font-medium"> {totalPages}</span> articles
                </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
                <a
                    onClick={handlePreviousPage}
                    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                    Previous
                </a>
                <a
                    onClick={handleNextPage}
                    className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                    Next
                </a>
            </div>
        </nav>
    );
};

export default Pagination;
