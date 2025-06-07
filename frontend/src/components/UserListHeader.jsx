import React from "react";

function UserListHeader() {
    return (
        <div className="hidden sm:grid grid-cols-3 px-4 pt-6 pb-2 text-sm text-gray-500 font-semibold">
            <div>Name</div>
            <div>Status</div>
            <div className="text-right">Creation Date</div>
        </div>
    );
}

export default UserListHeader;
