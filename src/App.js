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
        setLoaded(true)
    }, [loaded])

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default App
