import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Blog() {
    const [posts, setItems] = useState([])

    useEffect(() => {
        document.title = 'Piesrgr8 - Blog'

        const items = JSON.parse(localStorage.getItem('posts'))
        if (items) {
            setItems(items)
        }
    }, [])

    return (
        <div className="blog">
            <div className="title-header">
                <h1>Blog</h1>
            </div>
            <div className="posts">
                {posts.map((post) => (
                    <article key={post.id}>
                        <div className="link">
                            <Link to={'/blog/' + post.slug}>
                                <h3>{post.title.rendered}</h3>
                            </Link>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: post.excerpt.rendered,
                                }}
                            ></p>
                        </div>
                    </article>
                ))}
                <Outlet />
            </div>
        </div>
    )
}
