import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import twitchlogo from '../assets/media/pictures/twitchlogo.png'
import youtubelogo from '../assets/media/pictures/youtubelogo.png'
import newdiscord from '../assets/media/pictures/discord-logo-white.png'
import newspotify from '../assets/media/pictures/Spotify_Logo_RGB_Black.png'

function MediaDisplay(widget) {
    return <div></div>
}

function MediaCard(props) {
    const { widget, image, text, color, active, onClick } = props

    return (
        <div
            className={`media-card ${active ? 'active' : ''}`}
            style={{ backgroundColor: `${color}` }}
            onClick={onClick}
        >
            <span className="media-arrow">
                <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <div className="background">
                <img src={image} alt={text} />
            </div>
            <div className="media-title">
                <h1>{text}</h1>
            </div>
            {active && (
                <div className="iframe-container">
                    <iframe
                        id="frame"
                        title="Widget Stream"
                        src={widget}
                        allowFullScreen="true"
                        height="378"
                        width="620"
                    ></iframe>
                </div>
            )}
        </div>
    )
}

export default function MediaGallery() {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleCardClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    return (
        <div className="media-cards">
            <MediaCard
                image={twitchlogo}
                text={'Twitch Channel'}
                color={'#A14BF9'}
                active={activeIndex === 0}
                widget={'https://player.twitch.tv/?channel=piesrgr8&parent=piesrgr8.com'}
                onClick={() => handleCardClick(0)}
            />
            <MediaCard
                image={youtubelogo}
                text={'YouTube Channel'}
                color={'#E42526'}
                active={activeIndex === 1}
                widget={'https://www.youtube.com/embed/5Wakgwx8bCs'}
                onClick={() => handleCardClick(1)}
            />
            <MediaCard
                image={newdiscord}
                text={'Discord Server'}
                color={'#7289DA'}
                active={activeIndex === 2}
                widget={'https://discord.com/widget?id=457339577775161364&theme=dark'}
                onClick={() => handleCardClick(2)}
            />
            <MediaCard
                image={newspotify}
                text={'Music Taste'}
                color={'#1AB26B'}
                active={activeIndex === 3}
                widget={'https://open.spotify.com/embed/playlist/52iotVvBdqx3r4fzbM6H6f?utm_source=generator&theme=0'}
                onClick={() => handleCardClick(3)}
            />
        </div>
    )
}
