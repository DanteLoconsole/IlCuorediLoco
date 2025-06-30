import './style/Story.css'
import Data from '../assets/text/story.json';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Story() {
    return (
        <div className="story">
            <div className="story_content">
                <h1>{Data.title}</h1>
                <VerticalTimeline
                    lineColor="#389f98"
                >
                    {Data.story.map((sentence) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '#389f98' }}
                            contentArrowStyle={{ borderRight: '7px solid white' }}
                            date={sentence.date}
                            iconStyle={{ background: '#a6e3d5' }}
                            intersectionObserverProps={{
                                rootMargin: '0px 0px -40px 0px',
                                triggerOnce: false,
                            }}
                        >
                            <p style={{margin:0}}>{sentence.sentence}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Story