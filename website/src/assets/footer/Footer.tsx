import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="adres">
                <p>Il Cuore di Loco, Via Giuseppe Verdi, 23, 70010 Locorotondo BA, Italia</p>
            </div>
            <div className="email">
                <a className="hyperlink" href="mailto:info@ilcuorediloco.it">info@ilcuorediloco.it</a>
            </div>
            <div className="socials">
                <a
                    className="instagram"
                    href="https://www.instagram.com/ilcuorediloco/"
                    target="_blank"
                >
                    <img className="logo" src="/instagram.svg"/>
                </a>
                <a
                    className="booking"
                    href="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1&mute=1"
                    target="_blank"
                >
                    <img className="logo" src="/booking.svg"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;