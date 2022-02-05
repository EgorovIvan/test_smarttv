import React from 'react'
import './style/style.scss'

function Banner() {
    return (
        <div className="banner">
            <div className="banner__text">
                ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + "/images/qr.png"} alt="QR"/>
            </div>
            <div className="banner__text-img">
                Сканируйте QR-код или нажмите ОК
            </div>
                <button className="banner__btn">OK</button>
        </div>
    );
}

export default Banner;
