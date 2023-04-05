import React from 'react'

export default function Post(props) {
    const post = props.post
    return (
        <div className="blg-post">
            <article key={post.id}>
                <h1
                    id="title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div
                    id="cont"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
                {post.acf.whats_new ? (
                    post.acf.whats_new.map((acf) => (
                        <div className="acf">
                            <div className="timeline">
                                <div
                                    id="acf-time"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.time,
                                    }}
                                />
                                <div
                                    id="acf-text"
                                    dangerouslySetInnerHTML={{
                                        __html: acf.text,
                                    }}
                                />
                            </div>
                            <div className="line"></div>
                        </div>
                    ))
                ) : (
                    <div></div>
                )}
            </article>
        </div>
    )
}
