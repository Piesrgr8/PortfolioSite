import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './assets/css/App.css'

import Home from './pages/Home'
import About from './pages/About'

import Header from './comp/Header'
import Footer from './comp/Footer'
import Projects from './pages/Projects'
import Media from './pages/Media'
import Blog from './pages/Blog'
import BlogPost from './comp/BlogPost'

function App() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_WP + 'posts')
            .then((res) => {
                localStorage.setItem('posts', JSON.stringify(res.data))
            })
            .catch((err) => console.log(err))

        //DEV PERSONAL
        axios
            .get(process.env.REACT_APP_WP + 'project?project_keys=10&order=asc')
            .then((res) => {
                localStorage.setItem('DevPersonal', JSON.stringify(res.data))
            })
            .catch((err) => console.log(err))

        //WEB PERSONAL
        axios
            .get(process.env.REACT_APP_WP + 'project?project_keys=11&tags=12&order=asc')
            .then((res) => {
                localStorage.setItem('WebPersonal', JSON.stringify(res.data))
            })
            .catch((err) => console.log(err))

        //WEB BALLSTATE
        axios
            .get(process.env.REACT_APP_WP + 'project?project_keys=18&tags=13&order=asc')
            .then((res) => {
                localStorage.setItem('WebCollege', JSON.stringify(res.data))
            })
            .catch((err) => console.log(err))

        //VID PERSONAL
        axios
            .get(process.env.REACT_APP_WP + 'project?project_keys=15&tags=12&order=asc')
            .then((res) => {
                localStorage.setItem('VidPersonal', JSON.stringify(res.data))
            })
            .catch((err) => console.log(err))

        //VID HIGHSCHOOL
        axios
            .get(process.env.REACT_APP_WP + 'project?project_keys=15&tags=16&order=asc')
            .then((res) => {
                localStorage.setItem('VidHighSchool', JSON.stringify(res.data))
            })
            .catch((err) => console.log(err))

        //VID COLLEGE
        axios
            .get(process.env.REACT_APP_WP + 'project?project_keys=15&tags=13&order=asc')
            .then((res) => {
                localStorage.setItem('VidCollege', JSON.stringify(res.data))
            })
            .catch((err) => console.log(err))

        //VID CAMPAIGN
        axios
            .get(process.env.REACT_APP_WP + 'project?project_keys=15&tags=17&order=asc')
            .then((res) => {
                localStorage.setItem('VidCampaign', JSON.stringify(res.data))
            })
            .catch((err) => console.log(err))
        setLoaded(true)
    }, [loaded])

    return (
        <BrowserRouter>
        {loaded ?
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:postslug" element={<BlogPost />} />
                </Routes>
                <Footer />
            </div>
            : <h1>Loading</h1>}
        </BrowserRouter>
    )
}

export default App
