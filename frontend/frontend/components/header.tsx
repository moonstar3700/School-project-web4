import Link from "next/link";

const Header : React.FC = () => {
    return (
        <header>
            <div className="container items-center text-center bg-red-600 header">
                <a href="/" className="text-3xl font-bold underline">News Capture</a>
            </div>
        </header>
    )
}

export default Header