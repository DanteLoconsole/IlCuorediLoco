import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Gallery from './pages/Gallery.tsx';
import Header from "./assets/header/Header.tsx";
import Footer from "./assets/footer/Footer.tsx";
import Activities from "./pages/Activities.tsx";
import Story from "./pages/Story.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
    return (
        <div className="page_container">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;