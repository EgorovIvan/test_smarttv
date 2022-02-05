import React, {useState} from 'react'
import YouTube from "react-youtube";
import './style/style.scss'
import Banner from "./Banner";
import Panel from "./Panel";


const Main = () => {

    //Объявление состояний
    const [stylesBanner, setStylesBanner] = useState({
        animation: "showRight 4s",
        animationFillMode: "forwards",
        animationDelay: "4s"
    })
    const [stylesPanel, setStylesPanel] = useState(null)
    const [player, setPlayer] = useState(null)

    //Запись события видео в хук
    const onReady = (event) => {
        setPlayer(event.target)
    };

    //Запуск видео и анимаций баннера и панели
    const onPlay = () => {
        player.playVideo()
        setStylesBanner({animation: "showRight 2s", animationFillMode: "forwards", animationDelay: "4s"})
        setStylesPanel({animationDirection: "reverse"})
    }

    //Останов видео и включение анимаций баннера и панели
    const onPause = () => {
        player.pauseVideo()
        setStylesBanner({animationDirection: "reverse"})
        setStylesPanel({animation: "showLeft 3s", animationFillMode: "forwards"})
    }

    //Объявление свойств компонента видео
    const opts = {
        height: '721',
        width: '1280',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="container">

            {/*Добавление компонента панель с клавиатурой*/}
            <Panel onPlay={onPlay} onPause={onPause} styles={stylesPanel}/>

            {/*Добавление компонента видео*/}
            <div className="video">
                <YouTube videoId="BM4vHP1jbi0" opts={opts} onReady={onReady}/>
            </div>

            {/*Добавление компонента баннера*/}
            <Banner onPlay={onPlay} onPause={onPause} styles={stylesBanner}/>

        </div>
    );
}

export default Main;
