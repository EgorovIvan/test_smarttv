import React from 'react'
import './style/style.scss'


const Final = ({timeCount}) => {

    return (

        <div className="final-panel">

            <div className="final-panel__text">
                ЗАЯВКА <br/>
                ПРИНЯТА
            </div>

            <div className="final-panel__subtext">
                Держите телефон под рукой.<br/>
                Скоро с Вами свяжется наш менеджер.
            </div>

            <div className="final-panel__subtext">
                Окно автоматически закроется <br/>
                через {timeCount} секунд
            </div>

        </div>
    );
}

export default Final;
