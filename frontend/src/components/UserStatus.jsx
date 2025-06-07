import React from 'react';
import { useNavigate } from "react-router";

function UserStatus({ id, firstName, lastName, status, date }) {
    const navigate = useNavigate();

    const statusColors = {
        "Completed": "bg-green-500",
        "Waiting for HR to sign": "bg-yellow-400",
        "Waiting for Candidate to sign": "bg-orange-400",
        "Waiting for Candidate to Fill in form": "bg-blue-400",
        "default": "bg-gray-400"
    };

    const color = statusColors[status] || statusColors.default;

    return (
        <div
            onClick={() => navigate(`/create/${id}`)}
            className="cursor-pointer bg-white shadow-sm rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-md hover:bg-gray-50 transition"
        >
            <div className="w-full sm:w-1/3 text-medium font-medium text-gray-800">
                {firstName} {lastName}
            </div>

            <div className="w-full sm:w-1/3 mt-2 sm:mt-0 flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">{status}</span>
                <span className={`w-3 h-3 rounded-full ${color}`}></span>
            </div>

            <div className="w-full sm:w-1/3 text-sm text-gray-500 mt-2 sm:mt-0 text-left sm:text-right">
                Created: {date}
            </div>
        </div>
    );
}

export default UserStatus;
