import './style/Gallery.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const imageModules :Record<string, string> = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png}', {
    eager: true, // load immediately
    import: 'default' // get the default export (the URL)
});

const images = Object.values(imageModules).map((url) => ({
    original: url,
    thumbnail: url,
}));

function Gallery() {
    return (
        <div className="gallery">
            <div className="slider">
                <ImageGallery
                    items={images}
                    showBullets={true}
                    showPlayButton={true}
                    showIndex={true}
                    showFullscreenButton={true}
                    showNav={true}
                    showThumbnails={true}
                />
                <p>
                    Pictures by <a href="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1&mute=1">Dante Loconsole</a>
                </p>
            </div>
        </div>
    )
}

export default Gallery