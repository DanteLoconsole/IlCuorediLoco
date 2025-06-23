import './style/Home.css';
import Data from '../assets/text/home.json';
import Header from "../assets/header/Header.tsx";
import Footer from "../assets/footer/Footer.tsx";

function Home() {
    return (
        <div className="home">
            <Header />

            <section className="hero">
                <div className="introduction">
                    <h1>Welkom bij</h1>
                    <h1>Il Cuore di Loco</h1>
                    <h2>Jouw thuis in het hart van Puglia</h2>
                </div>
            </section>

            <section className="pitch">
                <h2>{Data.title}</h2>
                <p>{Data.p1}</p>
                <p>{Data.p2}</p>
                <p>{Data.p3}</p>
            </section>

            <section className="newsletter">
                <h2>Blijf op de hoogte via onze nieuwsletter!</h2>
                <h3>Schrijf je hier in</h3>
                <form>
                    <input type="text" placeholder="Naam" />
                    <input type="email" placeholder="E-mailadres" />
                    <button type="submit">Inschrijven</button>
                </form>
            </section>

            <Footer />
        </div>
    )
}

export default Home