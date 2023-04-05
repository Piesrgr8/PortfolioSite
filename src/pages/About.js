import React, { useEffect } from 'react'
import img1 from '../assets/media/pictures/cover.jpg'
import img2 from '../assets/media/pictures/stock-1.jpg'
import img3 from '../assets/media/pictures/icon.jpg'
import { Link } from 'react-router-dom'

export default function About() {
    useEffect(() => {
        document.title = 'Piesrgr8 - About'
    }, [])

    return (
        <div className="about">
            <div id="anim1" class="content-title">
                <h1>About Me</h1>
            </div>

            <section id="anim2">
                <div class="section-title">
                    <h2>How it came to be</h2>
                    <hr />
                </div>
                <div class="section-inner">
                    <div id="img-shadow">
                        <img alt="" src={img1} />
                    </div>
                    <div class="section-text">
                        <p>
                            When I was growing up, I was always attached to
                            electronics. Everyday after school, I would
                            instantly sit down and play Windows 2000 computer
                            games. I later switched to consoles and developed a
                            liking to video games even more, thanks to titles
                            like Battlefield and Call of Duty. Minecraft didn't
                            become an interest until a couple of online friends
                            suggested it to me, and when it did, I suddenly
                            started to become interested in other games, titles
                            that weren't at the same level that Call of Duty and
                            Battlefield were at. Today, I still have those
                            interested in mind, and is hoping to take the next
                            step and develop video games independently.
                        </p>
                    </div>
                </div>
            </section>

            <section id="anim3">
                <div class="section-title">
                    <h2>What I plan to do</h2>
                    <hr />
                </div>
                <div class="section-inner" id="sec2">
                    <div id="img-shadow2">
                        <img alt="" src={img2} />
                    </div>
                    <div class="section-text">
                        <p>
                            I am hoping to create programs, create video games,
                            design websites, and edit videos for people. The
                            great thing is that I have already had a great start
                            in making the magic happen. I have made a program
                            for mother who is teaching kindergarten, and it's
                            technically a replacement of the program that she is
                            being forced to use called Promethean. Its a drawing
                            app that allows the user to draw on a canvas, with
                            labeled colors, and simple tools to use. I have
                            already helped design a website for my dad and even
                            designed a website of my own. The thing that I have
                            mostly focused on is making videos for people, and I
                            have an entire library of them. All of the stuff
                            that I have done have been uploaded to my{' '}
                            <Link to={'/projects'}>projects</Link> page.
                        </p>
                    </div>
                </div>
            </section>

            <section id="anim4">
                <div class="section-title">
                    <h2>The meaning behind Piesrgr8</h2>
                    <hr />
                </div>
                <div class="section-inner">
                    <div id="img-shadow3">
                        <img alt="" src={img3} />
                    </div>
                    <div class="section-text">
                        <p>
                            During my 7th grade year, we were all given laptops
                            that were unlocked for games to be installed on, and
                            one of them was Minecraft cracked edition. This
                            launcher allows the game to launch without a mojang
                            account. I always started making my name 'NeoN'
                            because in Call of Duty, I always had the clan name
                            'NeoN'. But, during this time around, I wanted to be
                            unique and use a name that I feel like would make
                            sense to my friends. 'Piesrgr8' came to be when I
                            literally asked myself to think of something generic
                            and cut off the extra letters. I have been using
                            this new name ever since then.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
