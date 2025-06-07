import React from "react";

function FiltersBar({ searchTerm, onSearch, statusFilter, onFilterChange, statusOptions }) {
    return (
        <div className=" py-4 px-4 sm:px-0 rounded-md mb-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full sm:max-w-xs p-2 pl-4 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500"
                />
                <select
                    value={statusFilter}
                    onChange={(e) => onFilterChange(e.target.value)}
                    className="w-full sm:max-w-xs p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500"
                >
                    {statusOptions.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default FiltersBar;
