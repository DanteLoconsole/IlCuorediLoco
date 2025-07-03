import { useState } from 'react';
import './style/Activities.css'
import Data from '../assets/text/activities.json';


function Activities() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Data.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="activities">
            <div className="activity_picture">
                <img src={Data[currentIndex].image} alt="Activity" />

                <div className="activity">
                    <h1 className="title">{Data[currentIndex].title}</h1>
                    <p className="description">{Data[currentIndex].description}</p>
                    <button className="read-more-button">
                        <a href="https://pasqua.viaggiareinpuglia.it/en/dettaglio-infopoint/info-point-locorotondo" target="_blank" rel="noreferrer">
                            Lees meer
                        </a>
                    </button>
                </div>
                <div className="navigation-buttons">
                    <button onClick={handlePrevious} className="nav-button">&lt;</button>
                    <button onClick={handleNext} className="nav-button">&gt;</button>
                </div>
            </div>
        </div>
    )
}

export default Activities