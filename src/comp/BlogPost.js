import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from './Post'

export default function BlogPost() {
    const params = useParams()
    const [post, setPost] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('posts'))
        // eslint-disable-next-line
        items.map((postslug) => {
            if (postslug.slug === params.postslug) {
                setPost(postslug)
                setLoaded(true)
            }
        })
    }, [loaded, params])

    return <div>{loaded ? <Post post={post} /> : <h1>Loading...</h1>}</div>
}
