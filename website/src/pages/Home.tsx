import './style/Home.css';
import Data from '../assets/text/home.json';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="introduction">
                    <h1>Il Cuore di Loco</h1>
                    <h2>Jouw thuis in het hart van Puglia</h2>
                </div>
            </section>

            <section className="pitch">
                <h1>{Data.title}</h1>
                <p style={{fontSize: 50, fontFamily: 'Brush Script MT, cursive', margin: 0}}>~</p>
                <p>{Data.p1}</p>
                <p>{Data.p2}</p>
                <p>{Data.p3}</p>
            </section>

            <section className="newsletter">
                <h1>Op de hoogte blijven via onze nieuwsletter?</h1>
                <h2>Schrijf je hier in.</h2>
                <form>
                    <input type="text" placeholder="Naam" />
                    <input type="email" placeholder="E-mailadres" />
                    <button type="submit">Inschrijven</button>
                </form>
            </section>
        </div>
    )
}

export default Home