import './style/Story.css'
import Data from '../assets/text/story.json';

function Story() {
    return (
        <div className="story">
            <div className="story_content">
                <h1>{Data.title}</h1>
                <p>{Data.story}</p>
            </div>
        </div>
    )
}

export default Story