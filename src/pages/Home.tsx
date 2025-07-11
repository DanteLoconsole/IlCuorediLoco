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
                <p style={{fontSize: 50, margin: 0}}>~</p>
                <p>{Data.p1}</p>
                <p>{Data.p2}</p>
                <p>{Data.p3}</p>
            </section>

            <div className="instagram_widget">
                <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                <iframe src="https://cdn.lightwidget.com/widgets/8ced8ffe07275bcd92b6256e9f70f430.html" className="lightwidget-widget"/>
            </div>

            <section className="newsletter">
                <p style={{fontWeight: "bold"}}>Op de hoogte blijven via onze nieuwsletter?</p>
                <p>Schrijf je hier in.</p>
                <form>
                    <input type="text" placeholder="Naam" required/>
                    <input type="email" placeholder="E-mailadres" required/>
                    <button type="submit">Inschrijven</button>
                </form>
            </section>
        </div>
    )
}

export default Home