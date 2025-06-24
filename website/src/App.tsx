import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Gallery from './pages/Gallery.tsx';
import Header from "./assets/header/Header.tsx";
import Footer from "./assets/footer/Footer.tsx";
import Activities from "./pages/Activities.tsx";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/activities" element={<Activities />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;