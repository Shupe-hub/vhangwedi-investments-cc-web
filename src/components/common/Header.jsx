import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold tracking-widest">
                    VHAGWEDI
                </Link>

                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <Link to="/" className="hover:text-yellow-500">Home</Link>
                    <Link to="/property" className="hover:text-yellow-500">Property</Link>
                    <Link to="/mining" className="hover:text-yellow-500">Mining</Link>
                    <Link to="/financial" className="hover:text-yellow-500">Finance</Link>
                    <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
                </nav>

                <button className="hidden md:block px-5 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
                    Invest With Us
                </button>
            </div>
        </header>
    );
};

export default Header;
