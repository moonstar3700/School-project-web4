import Link from 'next/link';
import React, { useEffect } from 'react';

const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState<any>(false);

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('name') ? true : false;
        setIsLoggedIn(isLoggedIn);
    }, []);

    const logout = () => {
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('token');
        window.location.href = '/';
    };
    return (
        <header className="px-6 pt-6 mx-auto max-w-7xl lg:px-8">
            <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
                <a href="/" className="text-3xl font-bold">
                    News <span id="title">Capture</span>{' '}
                </a>
                <div className="flex mt-3 sm:ml-4 sm:mt-0">
                    {isLoggedIn ? (
                        <a
                            onClick={logout}
                            type="button"
                            className="inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Logout
                        </a>
                    ) : (
                        <>
                            <a
                                href="/login"
                                className="inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                className="inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
