import React from 'react';
import { useNavigate } from 'react-router';

function BackToMainButton({ className = "" }) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/')}
            className={`flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors ${className}`}
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Dashboard</span>
        </button>
    );
}

export default BackToMainButton;