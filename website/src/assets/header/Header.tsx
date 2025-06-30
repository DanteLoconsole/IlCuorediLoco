import { useState } from "react";
import "./Header.css";


const navigation = [
    { name: "Home", href: "/" },
    { name: "Info & boeken", href: "/204" },
    { name: "Galerij", href: "/gallery" },
    { name: "Verhaal", href: "/story" },
    { name: "Wat te doen?", href: "/activities" },
    { name: "Contact", href: "/contact" },
];

const Bars3Icon = () => (
    <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width="24"
        height="24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
);

const XMarkIcon = () => (
    <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width="24"
        height="24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="header">
            <nav className="nav" aria-label="Global">
                <div className="logo-container">
                    <a href="/" className="logo-link">
                        <span className="sr-only">Il Cuore di Loco</span>
                        <img
                            src="/public/logo_trans.svg"
                            alt=""
                            className="logo-img"
                        />
                    </a>
                </div>
                <button
                    className="mobile-toggle-btn"
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon />
                </button>
                <div className="desktop-nav">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="desktop-link">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="desktop-login">
                    <a href="/204" className="desktop-link">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {mobileMenuOpen && (
                <>
                    <div
                        className="mobile-menu-overlay"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div className="mobile-menu-panel">
                        <div className="mobile-panel-header">
                            <a href="/" className="logo-link">
                                <span className="sr-only">Il Cuore di Loco</span>
                                <img
                                    src="/public/logo_trans.svg"
                                    alt=""
                                    className="logo-img"
                                />
                            </a>
                            <button
                                type="button"
                                className="mobile-toggle-btn"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon />
                            </button>
                        </div>
                        <div className="mobile-panel-links">
                            <div className="mobile-nav">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="mobile-link-block"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <a href="/204" className="mobile-login-link">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}