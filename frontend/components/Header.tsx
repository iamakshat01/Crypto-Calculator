import React from 'react';

const Header:React.FC = () => {

    return (
        <header className="bg-slate-800 text-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <span className="ml-3 text-xl flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 mr-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    Crypto Exchange Calculator
                </span>
            </div>
        </header>
    )
}

export default Header;