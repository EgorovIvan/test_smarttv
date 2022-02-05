import React from 'react'
import './style/style.scss'


const Banner = ({onPause, styles}) => {

    return (
        <div className="banner" style={styles}>

            <div className="banner__text">
                ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
            </div>

            <div>
                <img src={process.env.PUBLIC_URL + "/images/qr.png"} alt="QR"/>
            </div>

            <div className="banner__text-img">
                Сканируйте QR-код или нажмите ОК
            </div>

                <button className="banner__btn" onClick={onPause}>ОК</button>

        </div>
    );
}

export default Banner;
