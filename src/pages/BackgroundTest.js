import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import '../assets/css/App.css'
import logo from '../assets/media/pictures/logomain.png'
import Background from '../comp/Background'

function BackgroundTest() {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className="home">
            <div className="main-page">
                <Background />
                <div className="title-container">
                    <img id="logo-1" alt="Welcome" src={logo} />
                    <h1 id="subtitle">Programmer / Video Editor</h1>
                </div>
            </div>
            <div className="cont-main">
                <div className="wrap">
                    <h1>The Best Part</h1>
                    <h2>You made it here.</h2>
                    <hr />
                    <p>
                        Welcome to my website, where all my videos, all my
                        projects, and the rest of my professional work is
                        stored! The purpose for this site is to demonstrate my
                        capabilities as an editor and as a programmer. In the
                        future, this website will be used for my youtube,
                        twitch, and other different kinds of projects, so come
                        back regularly once the final touches have been applied!
                        Thank you for coming to the website, and hope you are
                        staying safe at home and surviving this crazy pandemic!
                    </p>
                    <p>
                        If you want to know more about my work and what I do,
                        check out my <Link to="/about">about</Link> page! If you
                        would like to see the projects that I have done and what
                        I am currently doing, check out my{' '}
                        <Link to="/projects">projects</Link> page! There is also
                        a page for <Link to="/media">all my media</Link> if you
                        are wanting to see more of what I do, especially behind
                        the scenes, where I stream gameplay and upload videos to
                        my youtube!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BackgroundTest
