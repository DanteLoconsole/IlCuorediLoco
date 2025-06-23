import './style/Gallery.css'
import Header from "../assets/header/Header.tsx";
import Footer from "../assets/footer/Footer.tsx";

function Gallery() {
    return (
        <div className="gallery">
            <Header />

            <section>
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

export default Gallery