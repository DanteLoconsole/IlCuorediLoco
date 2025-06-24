import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img src="/logo_trans.svg" alt="Logo" className="logo" />
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/">Info & boeken</Link>
                <Link to="/gallery">Galerij</Link>
                <Link to="/story">Ons verhaal</Link>
                <Link to="/activities">Wat te doen?</Link>
                <Link to="/">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;