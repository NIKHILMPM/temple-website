'use client';
import React from 'react';

const loading = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-white z-[400]">
            <div className="w-15 h-15 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
            <div className="w-15 h-15 text-orange-500 font-bold">Loading...</div>
        </div>
    );
};

export default loading;
