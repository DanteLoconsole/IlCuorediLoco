import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Gallery from './pages/Gallery.tsx';
import Header from "./assets/header/Header.tsx";
import Footer from "./assets/footer/Footer.tsx";
import Activities from "./pages/Activities.tsx";
import Story from "./pages/Story.tsx";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/story" element={<Story />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;