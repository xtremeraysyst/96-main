import React from "react";

function Pagination({ totalPages, currentPage, onPageChange }) {
    return (
        <div className="flex justify-center items-center mt-6 gap-2 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-3 py-1 rounded-md text-sm shadow ${
                        currentPage === index + 1
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
