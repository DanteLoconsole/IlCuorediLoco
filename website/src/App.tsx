import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Gallery from './pages/Gallery.tsx';
import Header from "./assets/header/Header.tsx";
import Footer from "./assets/footer/Footer.tsx";

function App() {
    return (
        <>
            <Header />
            <main style={{ flex: '1' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;