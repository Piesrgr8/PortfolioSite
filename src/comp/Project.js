import React from 'react'

export default function Project(props) {
    const list = props.projects
    const visible = props.isVisible
    return (
        <div style={visible ? { display: 'block' } : { display: 'none' }}>
            {list.map((item) => (
                <section id={item.id}>
                    <h2 className="section-title">{item.title}</h2>
                    <div className="section-inner">
                        <div className="section-img">
                            <div
                                className="content-img"
                                style={
                                    !!item.img
                                        ? { display: 'block' }
                                        : { display: 'none' }
                                }
                            >
                                <img src={item.img} />
                            </div>
                        </div>
                        <div className="section-desc">
                            <p>{item.desc}</p>
                            <button>
                                <a href={item.link} target="_blank">
                                    Check It Out!
                                </a>
                            </button>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}
