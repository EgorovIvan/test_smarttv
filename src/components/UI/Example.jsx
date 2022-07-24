import React, {useState} from 'react'
import YouTube from "react-youtube";
import './style/style.scss'

const videoIdA = 'BM4vHP1jbi0';
const videoIdB = '-DX3vJiqxm4';

function Example() {

    const [videoId, setVideoId] = useState(videoIdA);
    const [player, setPlayer] = useState(null);

    const onReady = (event) => {
        // eslint-disable-next-line
        console.log(`YouTube Player object for videoId: "${videoId}" has been saved to state.`);
        setPlayer(event.target);
    };

    const onPlayVideo = () => {
        player.playVideo();
    };

    const onPauseVideo = () => {
        player.pauseVideo();
    };

    const onChangeVideo = () => {
        setVideoId(videoId === videoIdA ? videoIdB : videoIdA);
    };

    const opts = {
            height: '721',
            width: '1280',
            playerVars: {
                autoplay: 1,
            },
        };

    return (
        <div>
            <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            <button type="button" onClick={onPlayVideo} disabled={!player}>
                Play
            </button>
            <button type="button" onClick={onPauseVideo} disabled={!player}>
                Pause
            </button>
            <button type="button" onClick={onChangeVideo} disabled={!player}>
                Change Video
            </button>
        </div>
    );
}

export default Example;
