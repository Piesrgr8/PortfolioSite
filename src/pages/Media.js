import React, { useEffect } from 'react'
import axios from 'axios'
import MediaGallery from '../comp/MediaCard'

export default function Media() {
    useEffect(() => {
        document.title = 'Piesrgr8 - Media'
        axios
            .get('https://a.co/d/fN2duU9')
            .then((e) => console.log(e))
            .catch((e) => console.log(e))
    }, [])

    return (
        <main>
            <div className="media-container">
                <h1 id={"media-header"}>Media</h1>
                <MediaGallery />
            </div>
        </main>
    )
}
