import Link from "next/link";

const Header : React.FC = () => {
    return (
        <header>
            <div className="header">
                <a href="/" className="text-3xl font-bold">News <span id="title">Capture</span> </a>
            </div>
        </header>
    )
}

export default Header