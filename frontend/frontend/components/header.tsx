import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="mx-auto max-w-7xl px-6 lg:px-8 pt-6">
            <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                <a href="/" className="text-3xl font-bold">
                    News <span id="title">Capture</span>{' '}
                </a>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <button
                        type="button"
                        className="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
