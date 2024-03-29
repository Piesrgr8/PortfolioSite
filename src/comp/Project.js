import React from 'react'

export default function Project(props) {
    const list = props.projects
    const visible = props.isVisible
    return (
        <div style={visible ? { display: 'block' } : { display: 'none' }}>
            {list.map((item) => (
                <section id={item.id}>
                    <h2 className="section-title">{item.title.rendered}</h2>
                    <div className="section-inner">
                        <div className="section-img">
                            <div
                                className="content-img"
                                style={
                                    !!item.acf.project_image
                                        ? { display: 'block' }
                                        : { display: 'none' }
                                }
                            >
                                <img
                                    alt="Project Looks Cool Right?"
                                    src={item.acf.project_image}
                                />
                            </div>
                        </div>
                        <div className="section-desc">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: item.content.rendered,
                                }}
                            />
                            <a
                                href={item.acf.link}
                                rel="noreferrer"
                                target="_blank"
                                style={{ cursor: 'crosshair' }}
                            >
                                <button>Check It Out!</button>
                            </a>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}
