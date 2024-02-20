import React, { useEffect } from 'react'

import twitchlogo from '../assets/media/pictures/twitchlogo.png'
import youtubelogo from '../assets/media/pictures/youtubelogo.png'
import discord from '../assets/media/pictures/discord.png'
import spotify from '../assets/media/pictures/spotify.png'
import axios from 'axios'

export default function Media() {
    useEffect(() => {
        document.title = 'Piesrgr8 - Media'
        axios
            .get('https://a.co/d/fN2duU9')
            .then((e) => console.log(e))
            .catch((e) => console.log(e))
    }, [])

    return (
        <div>
            <div class="twitch-content">
                <a href="https://twitch.tv/piesrgr8">
                    <img src={twitchlogo} alt="" />
                </a>
                <div id="placeholders">
                    <iframe
                        id="streamVid"
                        title="Video Stream"
                        src="https://player.twitch.tv/?channel=piesrgr8&parent=piesrgr8.com"
                        allowfullscreen="true"
                        height="378"
                        width="620"
                    ></iframe>
                    <iframe
                        id="streamChat"
                        title="Stream Chat"
                        src="https://www.twitch.tv/embed/piesrgr8/chat?parent=piesrgr8.com"
                        allowfullscreen="false"
                        height="378"
                        width="350"
                    ></iframe>
                </div>
            </div>
            <div></div>
            <div class="youtube-content">
                <a href="https://youtube.com/JADENBOW8">
                    <img src={youtubelogo} alt="" />
                </a>
                <div id="placeholders">
                    <iframe
                        width="1000"
                        height="600"
                        src="https://www.youtube.com/embed/5Wakgwx8bCs"
                        title="YouTube Video Player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div class="discord-content">
                <a href="https://discordapp.com/users/252313795123347456">
                    <img src={discord} alt="" />
                </a>
                <div id="placeholders">
                    <iframe
                        src="https://discord.com/widget?id=457339577775161364&theme=dark"
                        title="Discord Server"
                        width="350"
                        height="500"
                        allowtransparency="true"
                        frameborder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>
                </div>
            </div>
            <div class="spotify-content">
                <a href="https://open.spotify.com/user/piesrgr8?si=1a463b9c5ee94795">
                    <img src={spotify} alt="" />
                </a>
                <div id="placeholders">
                    <iframe
                        src="https://open.spotify.com/embed/playlist/52iotVvBdqx3r4fzbM6H6f?utm_source=generator&theme=0"
                        title="Brain Melter"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                    <iframe
                        src="https://open.spotify.com/embed/playlist/6XtcFPkp8whQ5w8mGTlICG?utm_source=generator"
                        title="Nostalgia"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                    <iframe
                        src="https://open.spotify.com/embed/playlist/1S1YUjQkUgUWmVzxFdNSo3?utm_source=generator"
                        title="OldROM"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
