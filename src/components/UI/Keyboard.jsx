import React from 'react'
import './style/style.scss'

function Panel() {
    return (
        <div className="panel">
            <div className="panel__text">
                Введите ваш номер мобильного телефона
            </div>
            <div>
                <input type="text"/>
            </div>
            <div>
                и с Вами свяжется наш менеждер для дальнейшей консультации
            </div>
            <Keyboard/>
        </div>
    );
}

export default Panel;
