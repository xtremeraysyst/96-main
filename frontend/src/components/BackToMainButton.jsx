import React from 'react';
import { useNavigate } from 'react-router';

function BackToMainButton({ className = "" }) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/')}
            className={`fixed top-6 left-6 z-50 inline-flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-100 text-gray-700 rounded-lg shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl ${className}`}
            title="Back to Dashboard"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </button>
    );
}

export default BackToMainButton;