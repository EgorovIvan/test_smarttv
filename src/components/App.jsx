import React from 'react'
import Main from "./UI/Main";
import "./UI/style/style.scss"
import Example from "./UI/Example";



// import YouTube from 'react-youtube';
//
// class App extends React.Component {
//     render() {
//         const opts = {
//             height: '390',
//             width: '640',
//             playerVars: {
//                 // https://developers.google.com/youtube/player_parameters
//                 autoplay: 1,
//             },
//         };
//
//         return <div>
//             <button id="play" onClick={event => setState(event.target.id)}></button>
//             <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
//         </div>
//     }
//
//     _onReady(event) {
//         // access to player in all event handlers via event.target
//         event.target.pauseVideo();
//     }
// }
function App() {
    return (
        <div className="wrapper">
            {/*<Example/>*/}
            <Main/>
        </div>
    );
}

export default App;
