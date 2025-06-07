import React, { useState, useEffect } from "react";
import { users as allUsers } from "../utils/users";
import Sidebar from "../components/Sidebar";
import ElninoLogo from "../assets/elnino-logo";
import FiltersBar from "../components/FiltersBar.jsx";
import Pagination from "../components/Pagination";
import UserStatus from "../components/UserStatus";
import UserListHeader from "../components/UserListHeader";

function DashboardPage() {
    const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search") || "");
    const [statusFilter, setStatusFilter] = useState(localStorage.getItem("statusFilter") || "All");
    const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem("currentPage")) || 1);
    const usersPerPage = 5;

    const statusOptions = ["All", ...new Set(allUsers.map((u) => u.status))];

    useEffect(() => {
        localStorage.setItem("search", searchTerm);
        localStorage.setItem("statusFilter", statusFilter);
        localStorage.setItem("currentPage", currentPage);
    }, [searchTerm, statusFilter, currentPage]);

    const filteredUsers = allUsers.filter((user) => {
        const matchesSearch = `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "All" || user.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, statusFilter]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-18">
                        <div className="flex items-center">
                            <div className="transform scale-55 origin-left">
                                <ElninoLogo />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-500">
                                Welcome back, Admin
                            </div>
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">A</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex flex-1 overflow-hidden">
                <div className="hidden lg:flex lg:flex-shrink-0">
                    <div className="w-30">
                        <Sidebar />
                    </div>
                </div>

                <div className="flex-1 overflow-hidden">
                    <div className="h-full overflow-y-auto">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <div className="mb-8">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
                                        <p className="mt-2 text-sm text-gray-600">
                                            Manage employee contracts and track their progress
                                        </p>
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                <span>{allUsers.filter(u => u.status === 'Completed').length} Completed</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                                <span>{allUsers.filter(u => u.status.includes('Waiting')).length} Pending</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                                                <span>{allUsers.length} Total</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-600">Total Employees</p>
                                            <p className="text-2xl font-bold text-gray-900">{allUsers.length}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-600">Completed</p>
                                            <p className="text-2xl font-bold text-gray-900">{allUsers.filter(u => u.status === 'Completed').length}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-600">Pending</p>
                                            <p className="text-2xl font-bold text-gray-900">{allUsers.filter(u => u.status.includes('Waiting')).length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-900">Employee List</h3>
                                </div>
                                <div className="p-6">
                                    <FiltersBar
                                        searchTerm={searchTerm}
                                        onSearch={setSearchTerm}
                                        statusFilter={statusFilter}
                                        onFilterChange={setStatusFilter}
                                        statusOptions={statusOptions}
                                    />
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <UserListHeader />
                                </div>
                                
                                <div className="divide-y divide-gray-200">
                                    {paginatedUsers.length > 0 ? (
                                        paginatedUsers.map((user) => (
                                            <div key={user.id} className="px-6 py-4">
                                                <UserStatus
                                                    id={user.id}
                                                    firstName={user.first_name}
                                                    lastName={user.last_name}
                                                    status={user.status}
                                                    date={user.date_of_creation}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-6 py-12 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <h3 className="mt-2 text-sm font-medium text-gray-900">No employees found</h3>
                                            <p className="mt-1 text-sm text-gray-500">No employees match your current filters.</p>
                                        </div>
                                    )}
                                </div>

                                {totalPages > 1 && (
                                    <div className="px-6 py-4 border-t border-gray-200">
                                        <Pagination
                                            totalPages={totalPages}
                                            currentPage={currentPage}
                                            onPageChange={setCurrentPage}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DashboardPage;