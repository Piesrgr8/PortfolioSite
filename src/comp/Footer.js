import React from 'react'
import logo1 from '../assets/media/pictures/youtube.png'
import logo2 from '../assets/media/pictures/linkedin.png'
import logo3 from '../assets/media/pictures/twitch.png'
import logo4 from '../assets/media/pictures/github.png'

export default function Footer() {
    return (
        <footer>
            <div className="content-main">
                <div id="icons">
                    <a target="_parent" href="https://github.com/Piesrgr8/">
                        <img alt="Github" src={logo4} />
                    </a>
                    <a target="_parent" href="https://www.twitch.tv/piesrgr8">
                        <img alt="Twitch" src={logo3} />
                    </a>
                    <a
                        target="_parent"
                        href="https://www.youtube.com/JADENBOW8"
                    >
                        <img alt="YouTube" src={logo1} />
                    </a>
                    <a
                        target="_parent"
                        href="https://www.linkedin.com/in/jared-bowman-9574b11a7"
                    >
                        <img alt="linkedin" src={logo2} />
                    </a>
                </div>

                <div id="text">
                    <p>
                        Copyright © 2024 Piesrgr8. All rights reserved. Created
                        and Designed by Jared Bowman
                    </p>
                </div>
            </div>
        </footer>
    )
}
