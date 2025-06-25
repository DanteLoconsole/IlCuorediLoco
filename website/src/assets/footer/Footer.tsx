import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="email">
                <a
                    className="hyperlink"
                    href="mailto:info@ilcuorediloco.it"
                    target="_blank"
                >
                    <p>info@ilcuorediloco.it</p>
                </a>
            </div>
            <div className="adres">
                <a
                    className="hyperlink"
                    href="https://maps.app.goo.gl/a8SJf4we71nxEUWt7"
                    target="_blank"
                >
                    <p>Il Cuore di Loco, Via Giuseppe Verdi, 23, 70010 Locorotondo BA, Italia</p>
                </a>
            </div>
            <div className="socials">
                <a
                    className="instagram"
                    href="https://www.instagram.com/ilcuorediloco/"
                    target="_blank"
                >
                    <img className="logo" src="/instagram.svg" alt="instagram_link"/>
                </a>
                <a
                    className="booking"
                    href="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1&mute=1"
                    target="_blank"
                >
                    <img className="logo" src="/booking.svg" alt="booking_link"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;