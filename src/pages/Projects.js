import React, { useEffect, useState } from 'react'
import Project from '../comp/Project'

export default function Projects() {
    const [programBtn, setClickProgram] = useState(false)

    const [webBtns, setClickWebs] = useState(false)
    const [videoBtns, setClickVideos] = useState(false)

    const [cgWebPersonal, setCgWebPersonal] = useState(false)
    const [cgWebBallState, setCgWebBallState] = useState(false)

    const [cgVidPersonal, setCgVidPersonal] = useState(false)
    const [cgVidHighSchool, setCgVidHighSchool] = useState(false)
    const [cgVidCollege, setCgVidCollege] = useState(false)
    const [cgVidCampaign, setCgVidCampaign] = useState(false)

    const [devPersonal, setDevPersonal] = useState([])

    const [webPersonal, setWebPersonal] = useState([])
    const [webCollege, setWebCollege] = useState([])

    const [vidPersonal, setVidPersonal] = useState([])
    const [vidHighSchool, setVidHighSchool] = useState([])
    const [vidCollege, setVidCollege] = useState([])
    const [vidCampaign, setVidCampaign] = useState([])

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = 'Piesrgr8 - Projects'

        const devPersonalPosts = JSON.parse(localStorage.getItem('DevPersonal'))
        const webPersonalPosts = JSON.parse(localStorage.getItem('WebPersonal'))
        const webCollegePosts = JSON.parse(localStorage.getItem('WebCollege'))
        const vidPersonalPosts = JSON.parse(localStorage.getItem('VidPersonal'))
        const vidHighSchoolPosts = JSON.parse(
            localStorage.getItem('VidHighSchool')
        )
        const vidCollegePosts = JSON.parse(localStorage.getItem('VidCollege'))
        const vidCampaignPosts = JSON.parse(localStorage.getItem('VidCampaign'))

        if (devPersonalPosts) {
            setDevPersonal(devPersonalPosts)
        }

        if (webPersonalPosts && webCollegePosts) {
            setWebPersonal(webPersonalPosts)
            setWebCollege(webCollegePosts)
        }

        if (
            vidPersonalPosts &&
            vidHighSchoolPosts &&
            vidCollegePosts &&
            vidCampaignPosts
        ) {
            setVidPersonal(vidPersonalPosts)
            setVidHighSchool(vidHighSchoolPosts)
            setVidCollege(vidCollegePosts)
            setVidCampaign(vidCampaignPosts)
        }

        setCount(
            devPersonal.length +
                webPersonal.length +
                webCollege.length +
                vidPersonal.length +
                vidHighSchool.length +
                vidCollege.length +
                vidCampaign.length
        )
    }, [
        devPersonal,
        webPersonal,
        webCollege,
        vidPersonal,
        vidHighSchool,
        vidCollege,
        vidCampaign,
    ])

    const collapseAllCategories = () => {
        setCgWebPersonal(false)
        setCgWebBallState(false)
        setCgVidPersonal(false)
        setCgVidHighSchool(false)
        setCgVidCollege(false)
        setCgVidCampaign(false)
    }

    const collapseWebCategories = () => {
        setCgWebPersonal(false)
        setCgWebBallState(false)
    }

    const collapseVidCategories = () => {
        setCgVidPersonal(false)
        setCgVidHighSchool(false)
        setCgVidCollege(false)
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
        setCgVidCollege(false)
        setCgVidCampaign(false)

        cgVidPersonal ? setCgVidPersonal(false) : setCgVidPersonal(true)
    }

    const toggleCgVidHighSchool = () => {
        collapseWebCategories()
        setClickProgram(false)
        setClickWebs(false)

        setCgVidPersonal(false)
        setCgVidCollege(false)
        setCgVidCampaign(false)

        cgVidHighSchool ? setCgVidHighSchool(false) : setCgVidHighSchool(true)
    }

    const toggleCgVidCollege = () => {
        collapseWebCategories()
        setClickProgram(false)
        setClickWebs(false)

        setCgVidPersonal(false)
        setCgVidHighSchool(false)
        setCgVidCampaign(false)

        cgVidCollege ? setCgVidCollege(false) : setCgVidCollege(true)
    }

    const toggleCgVidCampaign = () => {
        collapseWebCategories()
        setClickProgram(false)
        setClickWebs(false)

        setCgVidPersonal(false)
        setCgVidHighSchool(false)
        setCgVidCollege(false)

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
                    <div id="background"></div>
                    <p>Programs</p>
                </button>
                <button id="button2" onClick={toggleWebs}>
                    <div id="background"></div>
                    <p>Websites</p>
                </button>
                <button id="button3" onClick={toggleVids}>
                    <div id="background"></div>
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
                <button id="button6" onClick={toggleCgVidCollege}>
                    <p>College</p>
                </button>
                <button id="button7" onClick={toggleCgVidCampaign}>
                    <p>Campaign</p>
                </button>
            </div>
            <Project projects={devPersonal} isVisible={programBtn} />
            <Project projects={webPersonal} isVisible={cgWebPersonal} />
            <Project projects={webCollege} isVisible={cgWebBallState} />
            <Project projects={vidPersonal} isVisible={cgVidPersonal} />
            <Project projects={vidHighSchool} isVisible={cgVidHighSchool} />
            <Project projects={vidCollege} isVisible={cgVidCollege} />
            <Project projects={vidCampaign} isVisible={cgVidCampaign} />
        </div>
    )
}
