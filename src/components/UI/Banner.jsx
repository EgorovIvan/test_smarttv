import React from 'react'
import './style/style.scss'

function Main() {
    return (
        <div className="container">

            <iframe width="1200"
                    height="721"
                    src="https://www.youtube.com/embed/BM4vHP1jbi0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen/>
        </div>
    );
}

export default Main;
