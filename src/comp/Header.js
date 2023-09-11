import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/media/pictures/logo.png'
import menubtn from '../assets/media/pictures/menu.png'

export default function Header() {
    const location = useLocation().pathname
    const [menuVisible, setMenuVisibility] = useState(false)

    const menuButton = () => {
        menuVisible ? setMenuVisibility(false) : setMenuVisibility(true)
    }

    return (
        <>
            <header className="header" id={location === '/' ? '#homepage' : ''}>
                <div className="menub">
                    <img alt="menu" onClick={menuButton} src={menubtn} />
                    <div
                        className="menubmenu"
                        style={
                            menuVisible
                                ? { display: 'block' }
                                : { display: 'none' }
                        }
                    >
                        <ul className="navigation">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/media">Media</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="inner">
                    {/* <div class="menub">
<img alt="menu" onclick="menuButton(this)" src="media/pictures/menu.png">
</div> */}

                    <div className="logo_container">
                        <Link to="/">
                            <img alt="Its a logo" src={logo} />
                        </Link>
                    </div>

                    <ul className="navigation">
                        {/* <a target="_parent" href="index.html"><li>Home</li></a> */}
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/media">Media</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <hr style={{ height: '7em', border: 'none' }} />
        </>
    )
}
