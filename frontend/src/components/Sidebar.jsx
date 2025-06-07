import React from "react";
import { useNavigate } from "react-router";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <aside className="w-full sm:w-64 bg-white border-b sm:border-b-0 sm:border-r border-gray-200 p-4 sm:p-6 shadow-md sm:shadow-lg h-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Menu</h2>

            <button
                onClick={() => navigate("/register")}
                className="w-full mb-3 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
                + Create User
            </button>

            <button
                onClick={() => navigate("/login")}
                className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg shadow hover:bg-gray-200 transition"
            >
                Log Out
            </button>
        </aside>
    );
}

export default Sidebar;
