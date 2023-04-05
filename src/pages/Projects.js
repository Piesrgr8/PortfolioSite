import React, { useEffect, useState } from 'react'
import Project from '../comp/Project'

import textor from '../assets/media/pictures/textor.PNG'
import DrawSwing from '../assets/media/pictures/drawswing.png'
import MedTrak from '../assets/media/pictures/medtrak-prev.gif'
import PieBot from '../assets/media/pictures/discordbot.png'
import campaign from '../assets/media/pictures/alexweb.png'
import shakespeare from '../assets/media/pictures/shakespeare.gif'
import trf from '../assets/media/pictures/therightfluff.PNG'
import swcft from '../assets/media/pictures/swcft.PNG'
import clearpath from '../assets/media/pictures/clearpath.PNG'

const dev = [
    {
        id: 1,
        type: 'dev',
        subtype: 'personal',
        title: 'Battlecraft Server',
        desc: 'This is where I mainly started to learn Java for the first time. It started to come up when I made a Minecraft Server and used plugins from the Bukkit website. But, it started to get out of hand when I began adding a plugin for every small thing, like commands to ban, or to use particle effects. To make sure everything was at my liking, I made a plugin specifically to fix this issue of installing a bunch of other plugins.',
        link: 'https://github.com/Piesrgr8/Battlecraft-Server-1.9',
        img: '',
    },
    {
        id: 2,
        type: 'dev',
        subtype: 'personal',
        title: 'Textor',
        desc: "This is what I did as a minor replacement of a regular notepad application. I wanted something that didn't require too much updating and didn't need to connect to the internet for an update, so this very lightweight application fixed that problem. It's able to save and read text files with ease, and will save automatically when left alone.",
        link: 'https://github.com/Piesrgr8/Textor',
        img: textor,
    },
    {
        id: 3,
        type: 'dev',
        subtype: 'personal',
        title: 'DrawSwing',
        desc: 'This was a drawing app that I made for my mom because of her struggles with big applications such as Promethean. My drawing app is designed for easy use, with a simple color picker, toolbox, and stroke size. It also has a lock feature that disables input, that way no changes can be made. Unfortunately, it has yet to know how to save files or alternate files, so it acts as a scratch pad for the most part. ',
        link: 'https://github.com/Piesrgr8/DrawSwing',
        img: DrawSwing,
    },
    {
        id: 4,
        type: 'dev',
        subtype: 'personal',
        title: 'MedTrak',
        desc: 'I believe that this app is the future for modern day medicine. We are living in the digital age, and yet we rely on timers to keep us on track with our medication. Now its possible to track your medication and get notified when its time to take again. I hope that further down the line, this application would be used in the real world for physicians when a patient checks in or prescribe someone with medicine. I aim to make sure that this application is helpful and resourceful so that we can stay on top of medicine. ',
        link: 'https://github.com/Piesrgr8/MedTrak',
        img: MedTrak,
    },
    {
        id: 5,
        type: 'dev',
        subtype: 'personal',
        title: 'PieBot',
        desc: 'This bot is what I intend to use as an essentials bot for my server, where it will override bots such as MEE6, ReactionRoles, and StreamCord. It has first-user authentication, twitch notifications for my twitch channel, and a command listener to recieve information on the fly. A lot is in store for this bot, such as server health and runtime, more commands, and more daily events to keep the community engaged.',
        link: 'https://discord.gg/MbPJT6hKE2',
        img: PieBot,
    },
]
const web = [
    [
        {
            id: 6,
            type: 'web',
            subtype: 'personal',
            title: 'Piesrgr8 Website',
            desc: "I made this website when I was a junior in high school, but it wasn't done through anything professional. I did all my editing through Kahn Academy, where they were teaching HTML and allowed custom projects. I also figured that this would be a good way to show off my programming and designing skills. I'm glad how this turned out, with the different tabs, the home screen, the projects page, even the contact page. It's very simple to navigate and more. Its literally this website. You know, the one you clicked on or searched for. ",
            link: 'https://piesrgr8.com',
            img: '',
        },
        {
            id: 7,
            type: 'web',
            subtype: 'personal',
            title: 'Bowman For Indiana',
            desc: "This website I made for my brother when he was running for state senate. The current website that he had was made with a website engine, but since I made my own website, I thought I'd give it a shot and make one for my brother. It turned out the same way, but more fluid and modern. It had a professional look to it, rather than looking gray.",
            link: 'https://bowmanforindiana.com/jared',
            img: campaign,
        },
        {
            id: 8,
            type: 'web',
            subtype: 'personal',
            title: 'Shakespeare Sound Podcast',
            desc: 'My aunt had a podcast that began back in 2010, and it was pretty successful from what I hear. But, her website was being hosted on SquareSpace, which she has to pay a premium for in order to keep it running. To fix this, I used AWS to host a react site and tie it in with Wordpress as the backend. This should reduce the cost of having her website up.',
            link: 'http://theshakespearesound.com.s3-website-us-east-1.amazonaws.com/',
            img: shakespeare,
        },
        {
            id: 9,
            type: 'web',
            subtype: 'personal',
            title: 'The Right Fluff',
            desc: 'My aunt is starting out a business entirely based on organic cotton candy. To me, in order to be successful in business, you need a useful website, and this is where I came in. I used AWS to host a react site that had the list of flavors, a contact form, and an image carousel on the home page.',
            link: 'https://trfcottoncandy.com',
            img: trf,
        },
        {
            id: 10,
            type: 'web',
            subtype: 'personal',
            title: 'SWCFT Website',
            desc: 'My dad works at a fire station that has a website that is way out of date. My solution was to convert it to a wordpress site, where any member of the fire station can make official announcements. Everything is editable thanks to wordpress.',
            link: 'https://swcft.com/wp/',
            img: swcft,
        },
    ],
    [
        {
            id: 11,
            type: 'web',
            subtype: 'ballstate',
            title: 'Clearpath',
            desc: "Clearpath was the first project I have ever worked on while employed at the Digital Corps. It's purpose was to see if any dual credit courses would transfer to Ball State. Me and 2 others were able to make this with wordpress(REST) and ReactJS to make the experience easy for users.",
            link: 'https://dualcredit.apsoprojects.org/',
            img: clearpath,
        },
    ],
]
const vid = [
    [
        {
            id: 12,
            type: 'vid',
            subtype: 'personal',
            title: 'DreamWave',
            desc: "The thing about me is that when I listen to music, I always picture something in my head, like adding the colors and the different scenery items. The song in this video is called, 'Daydream', which is by Medasin, and his song appeared while I was listening to a playlist full of chillstep and future bass songs. One of my thoughts in this was a lyrical kind of video, since my past videos have always been showcasing the heck out of my server. This one is truly different to what I have done in the past, and another video like this one is bound to happen.",
            link: 'https://drive.google.com/file/d/1gq7R9buDsNa9TplR0WLdbDjbNxslJGIB/view?usp=share_link',
            img: '',
        },
        {
            id: 13,
            type: 'vid',
            subtype: 'personal',
            title: 'MTV Cribs Parody',
            desc: "This was a fun video to put together with the group that I was with for marching band. This video never touched the surfaces of YouTube or Twitter, but was uploaded to a Facebook group for the band itself, and was meant to be a funny video rather than a serious one. Whats funny is that I just walked into the house with my friend Chase, and started to play around with my camera. Once I started to record, I said welcome to MTV Cribs, and he started to ramble about the house. If he didn't talk about the house at all or even engage with me, the video would've never touched the internet.",
            link: 'https://drive.google.com/file/d/154AWmNAXnux9DtWVBRWrrEE-jEOYgTGg/view?usp=share_link',
            img: '',
        },
        {
            id: 14,
            type: 'vid',
            subtype: 'personal',
            title: 'New Years Eve',
            desc: "The song title explains it all. Everytime I listen to this, I think of how the years have passed, and that became the whole entire theme for this video. I found this to be a very easy project overall, because the music video for this was just collaborations of celebratory videos in past films. I took some of the clips and then overlayed it with a compilation video of all ball drops from the 70's to the present, making both videos 50% opacity to show both at the same time.",
            link: 'https://drive.google.com/file/d/1x-LSJFOOvoNwoVPL3BG2XlzZfHmMmANj/view?usp=share_link',
            img: '',
        },
        {
            id: 15,
            type: 'vid',
            subtype: 'personal',
            title: 'Throughout The Generations',
            desc: "This was done for 4-H as my last project. They told me that a video needs to be created that has a storyline and a creative twist to it. I thought, since nostalgia was big at the time, I figured if we used past cameras and put them in a modern day setting, then it just might work very well. As always, I had to listen back at a song that gave me that nostalgia feel, and one of them was, 'Walking on a dream', by Empire of the Sun. While working with the song, I also had to tie it in with the video that I was making, and judging by the grade I got from it, it was really good.",
            link: 'https://drive.google.com/file/d/1eZSJp9ob_3f2-aGZ74EDYIr6DT8nDiHO/view?usp=share_link',
            img: '',
        },
    ],
    [
        {
            id: 16,
            type: 'vid',
            subtype: 'highschool',
            title: 'Bi-County',
            desc: "The video that did it all. This video wasn't planned by me, but I was appointed to the position of Editor when a friend of mine at my high school suggested it to me. My friend did most of the work, like getting some of the footage with the team and getting sound for the video. After all of his work was done, he simply gave me a flash drive and told me that I was on my own now. Unfortunately, there was no storyboard to work with or anything of the sort. What he really wanted was a video, and thats what I did for him. This video was created with Sony Vegas, Boris, and Saphire.",
            link: 'https://drive.google.com/file/d/1pCf2iMzdSontiYyO-BD7BI1Cotwx323B/view?usp=share_link',
            img: '',
        },
        {
            id: 17,
            type: 'vid',
            subtype: 'highschool',
            title: 'LaVille Marching Band Intro',
            desc: 'My teacher, Mr. Lieto, wanted me to make a video for the newcomers of marching band. This video would feature all of the things that we did during our first year of marching band and showcasing the previous show that we did, which was based off of Narnia. Our teacher would then talk during the video, explaining how marching band affects people and how fun it is so that people can eventually join marching band. This video was definitely effective, and many people were excited to join the next year for our next show.',
            link: 'https://drive.google.com/file/d/0B9GN7QpgqfO6ckczcjVmcnFQeDA/view?usp=share_link&resourcekey=0-ATy1XocpNkc2U6OTUexa4A',
            img: '',
        },
        {
            id: 18,
            type: 'vid',
            subtype: 'highschool',
            title: 'Prom Date vs. Teammate',
            desc: "I had to do this video for a class that I was in about marketing. Everyone was instructed to have a prom date and a person that knew you at the same level as your date, and you had to come up with questions that they can answer. If you didn't have a prom date, you could either pair up with someone that had one or fake having one. Since I had my prom date, I figured this would be a simple setup, especially since there is a green screen in the background and I have all the time in the world to add a scoreboard and sound effects. I could safely say that this video was easy to make despite the amount of things I added to it.",
            link: 'https://drive.google.com/file/d/1KnOcBL3G2R2gUeQwbSFH10n_rfQaANxD/view?usp=share_link',
            img: '',
        },
        {
            id: 19,
            type: 'vid',
            subtype: 'highschool',
            title: 'Sports Intro',
            desc: 'This actually kickstarted my whole career as a video editor for somebody else. There was a teacher who was controlling the whole operation for broadcasting and needed some extra set of hands to improve their sports broadcasts. I was given a list of things to do, and one of those things was a video for every sporting event introduction. The video was very simple, since he gave me everything that was needed. I put everything together first, then added subtitles after that. This was rendered twice, the second time was to add more footage and fix a couple of things with the subtitles.',
            link: 'https://drive.google.com/file/d/0B9GN7QpgqfO6c19QWGxJSmppUWc/view?usp=share_link&resourcekey=0-6tEcwaAYkOOCKdTZXFZecQ',
            img: '',
        },
    ],
    [
        {
            id: 20,
            type: 'vid',
            subtype: 'campaign',
            title: 'Bowman For Indiana: Advertisement 1',
            desc: 'This was the start of something big. My brother, Alex Bowman, was running for state senate back in 2019. He needed someone to make commercials for him, which would be displayed on social media. I volunteered to do this task, since I believe the advertising can help shape his campaign well. Me, my brother, and the rest of the crew, scheduled a day for footage around South Bend, and this is what we captured in a day.',
            link: 'https://drive.google.com/file/d/1lYE60FY2_RB1oIsNZvaB6tfMIOkW_yTU/view?usp=share_link',
            img: '',
        },
        {
            id: 21,
            type: 'vid',
            subtype: 'campaign',
            title: 'Bowman For Indiana: Advertisement 2',
            desc: "The second advertisement for Alex Bowman. This time, it was a quick video explaining his plan for South Bend. We filmed this as quick as possible, because between the first and the second, there is a huge gap of time. We had to push something out quick or else we would lose people's interest. This was the best we could do.",
            link: 'https://drive.google.com/file/d/1wjsNTncqeV5q7bcq3mw-iBqWiLUHEEr5/view?usp=share_link',
            img: '',
        },
        {
            id: 22,
            type: 'vid',
            subtype: 'campaign',
            title: 'Bowman For Indiana: Social Distance',
            desc: "COVID-19 just hit, and it's making campaigning really hard for us. We did the next best thing, which was to have my grandma answer the door to Alex Bowman, holding signs to convince her to vote for him. The plan was to have this video everywhere as possible, since we haven't seen a video from a politician being careful during COVID-19, so we believed this would be a big hit on the internet.",
            link: 'https://drive.google.com/file/d/1fKpNAa0HTnvlPMbRzNVvgMfX3KJTKkWL/view?usp=share_link',
            img: '',
        },
        {
            id: 23,
            type: 'vid',
            subtype: 'campaign',
            title: 'Bowman For Indiana: All Together',
            desc: "Any campaign followers were allowed to send in a clip of themselves saying what they like about our candidate and also saying, 'Vote for Alex Bowman!' We decided this for the video to promote more of the campaign before it ends. I'd like to say as an editor, that everyone did a phenomenal job. It was super fun working on these videos and having that encouragement and support from everyone!",
            link: 'https://drive.google.com/file/d/1TFPIvnnQ-pxNNh_zvuIIcNBRdTSbN72N/view?usp=share_link',
            img: '',
        },
    ],
]

export default function Projects() {
    const [programBtn, setClickProgram] = useState(false)

    const [webBtns, setClickWebs] = useState(false)
    const [videoBtns, setClickVideos] = useState(false)

    const [cgWebPersonal, setCgWebPersonal] = useState(false)
    const [cgWebBallState, setCgWebBallState] = useState(false)

    const [cgVidPersonal, setCgVidPersonal] = useState(false)
    const [cgVidHighSchool, setCgVidHighSchool] = useState(false)
    const [cgVidCampaign, setCgVidCampaign] = useState(false)

    const [count, setCount] = useState(
        dev.length +
            web[0].length +
            web[1].length +
            vid[0].length +
            vid[1].length +
            vid[2].length
    )

    useEffect(() => {
        document.title = 'Piesrgr8 - Projects'
    }, [])

    const collapseAllCategories = () => {
        setCgWebPersonal(false)
        setCgWebBallState(false)
        setCgVidPersonal(false)
        setCgVidHighSchool(false)
        setCgVidCampaign(false)
    }

    const collapseWebCategories = () => {
        setCgWebPersonal(false)
        setCgWebBallState(false)
    }

    const collapseVidCategories = () => {
        setCgVidPersonal(false)
        setCgVidHighSchool(false)
        setCgVidCampaign(false)
    }

    const toggleDev = () => {
        collapseAllCategories()

        setClickWebs(false)
        setClickVideos(false)

        programBtn ? setClickProgram(false) : setClickProgram(true)
    }

    const toggleWebs = () => {
        collapseVidCategories()
        setClickProgram(false)
        setClickVideos(false)

        webBtns ? setClickWebs(false) : setClickWebs(true)
    }

    const toggleCgWebPersonal = () => {
        collapseVidCategories()
        setClickProgram(false)
        setClickVideos(false)

        setCgWebBallState(false)

        cgWebPersonal ? setCgWebPersonal(false) : setCgWebPersonal(true)
    }

    const toggleCgWebBallState = () => {
        collapseVidCategories()
        setClickProgram(false)
        setClickVideos(false)

        setCgWebPersonal(false)

        cgWebBallState ? setCgWebBallState(false) : setCgWebBallState(true)
    }

    const toggleVids = () => {
        collapseWebCategories()
        setClickProgram(false)
        setClickWebs(false)

        videoBtns ? setClickVideos(false) : setClickVideos(true)
    }

    const toggleCgVidPersonal = () => {
        collapseWebCategories()
        setClickProgram(false)
        setClickWebs(false)

        setCgVidHighSchool(false)
        setCgVidCampaign(false)

        cgVidPersonal ? setCgVidPersonal(false) : setCgVidPersonal(true)
    }

    const toggleCgVidHighSchool = () => {
        collapseWebCategories()
        setClickProgram(false)
        setClickWebs(false)

        setCgVidPersonal(false)
        setCgVidCampaign(false)

        cgVidHighSchool ? setCgVidHighSchool(false) : setCgVidHighSchool(true)
    }

    const toggleCgVidCampaign = () => {
        collapseWebCategories()
        setClickProgram(false)
        setClickWebs(false)

        setCgVidPersonal(false)
        setCgVidHighSchool(false)

        cgVidCampaign ? setCgVidCampaign(false) : setCgVidCampaign(true)
    }

    return (
        <div className="projects">
            <div class="title-header">
                <h1>Projects</h1>
                <h3>Check it all, I have {count} of them!</h3>
            </div>
            <div class="buttons">
                <button id="button1" onClick={toggleDev}>
                    <p>Programs</p>
                </button>
                <button id="button2" onClick={toggleWebs}>
                    <p>Websites</p>
                </button>
                <button id="button3" onClick={toggleVids}>
                    <p>Videos</p>
                </button>
            </div>
            <div
                class="webbuttons"
                style={webBtns ? { display: 'flex' } : { display: 'none' }}
            >
                <button id="button7" onClick={toggleCgWebPersonal}>
                    <p>Personal</p>
                </button>
                <button id="button8" onClick={toggleCgWebBallState}>
                    <p>Ball State</p>
                </button>
            </div>
            <div
                class="vidbuttons"
                style={videoBtns ? { display: 'flex' } : { display: 'none' }}
            >
                <button id="button4" onClick={toggleCgVidPersonal}>
                    <p>Personal</p>
                </button>
                <button id="button5" onClick={toggleCgVidHighSchool}>
                    <p>High School</p>
                </button>
                <button id="button6" onClick={toggleCgVidCampaign}>
                    <p>Campaign</p>
                </button>
            </div>
            <Project projects={dev} isVisible={programBtn} />
            <Project projects={web[0]} isVisible={cgWebPersonal} />
            <Project projects={web[1]} isVisible={cgWebBallState} />
            <Project projects={vid[0]} isVisible={cgVidPersonal} />
            <Project projects={vid[1]} isVisible={cgVidHighSchool} />
            <Project projects={vid[2]} isVisible={cgVidCampaign} />
        </div>
    )
}
