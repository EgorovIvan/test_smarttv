import React from 'react'
import './style/style.scss'

function Keyboard() {
    return (
        <div className="keyboard">
            <div>
                <button className="keyboard__btn">1</button>
                <button className="keyboard__btn">2</button>
                <button className="keyboard__btn">3</button>
            </div>
            <div>
                <button className="keyboard__btn">4</button>
                <button className="keyboard__btn">5</button>
                <button className="keyboard__btn">6</button>
            </div>
            <div>
                <button className="keyboard__btn">7</button>
                <button className="keyboard__btn">8</button>
                <button className="keyboard__btn">9</button>
            </div>
            <div>
                <button className="keyboard__delete">СТЕРЕТЬ</button>
                <button className="keyboard__btn">0</button>
            </div>
        </div>
    );
}

export default Keyboard;
