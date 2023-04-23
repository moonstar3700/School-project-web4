import Link from "next/link";

const Header : React.FC = () => {
    return (
        <header>
            <div>
                <a href="/">News Capture</a>
            </div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/articles">Articles</Link>  
            </nav>
        </header>
    )
}

export default Header