import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src="/logo_trans.svg" alt="Logo" className="logo" />
            <nav className="nav">
                <a href="/">Home</a>
                <a href="#">Info & boeken</a>
                <a href="/src/pages/Gallery.tsx">Galerij</a>
                <a href="#">Ons verhaal</a>
                <a href="#">Wat te doen?</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header;