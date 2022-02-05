import React, {useState, useEffect} from 'react'
import './style/style.scss'
import InputMask from 'react-input-mask';
import Final from "./Final";


function Panel({onPlay, styles}) {

    //Объявление состояний
    const [state, setState] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [styleBtn, setStyleBtn] = useState(null)
    const [addNumber, setAddNumber] = useState('')
    const [count, setCount] = useState('5')
    const [visible, setVisible] = useState(false)
    const [timeCount, setTimeCount] = useState('')
    const [numberTel, setNumberTel] = useState({value: ''})

    //Запись события при изменении в поле набора Input
    const handleChange = (event) => {
        setNumberTel({
            value: event.target.value.replace(/[^0-9]/g, '')
        });
    }

    //Ввод цифр номера телефона с виртуальной клавиатуры
    useEffect(() => {

        //Условия удаления лишних цифр номера
        if ((numberTel.value.concat(addNumber)).length > 11) {
            setNumberTel({
                    value: numberTel.value
                }
            )
        } else {
            setNumberTel({
                value: numberTel.value.concat(addNumber)
            })
        }

        return setAddNumber('')

    }, [addNumber])

    //Функция удаления цифр номера телефона с виртуальной клавиатуры
    const delFunc = () => {

        const string = numberTel.value.replace(/[^0-9]/g, '').slice(0, -1)

        setNumberTel({
            value: string
        })

    }

    //Функция присваивания состояния checkbox "Согласие на обработку персональных данных"
    const handleChecked = () => {
        if (!state) {
            setState(true)
        } else {
            setState(false)
        }
    }

    //Обработчик активации кнопки "ПОДТВЕРДИТЬ НОМЕР"
    useEffect(() => {

        const string = numberTel.value.replace(/[^0-9]/g, '')

        if (string.length >= 11 && state) {
            setStyleBtn({background: "#000000", color: "#ffffff"})
            setDisabled(false)

        } else {
            setStyleBtn({background: "#86D3F4", color: "#000000"})
            setDisabled(true)
        }

    }, [state, numberTel.value])

    //Обработчик навигации стрелками между кнопками виртуальной клавиатуры
    useEffect(() => {

        //Считывание событий стрелок с клавиатуры
        document.onkeydown = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    setCount(count - 1)
                    break;
                case "ArrowUp":
                    setCount(count - 3)
                    break;
                case "ArrowRight":
                    setCount(count + 1)
                    break;
                case "ArrowDown":
                    setCount(count + 3)
                    break;
                default:
            }
        }

        //Условия присваивания фокуса кнопкам виртуальной клавиатуры
        switch (count) {
            case 1:
                document.getElementById("1").focus()
                break;
            case 2:
                document.getElementById("2").focus()
                break;
            case 3:
                document.getElementById("3").focus()
                break;
            case 4:
                document.getElementById("4").focus()
                break;
            case 5:
                document.getElementById("5").focus()
                break;
            case 6:
                document.getElementById("6").focus()
                break;
            case 7:
                document.getElementById("7").focus()
                break;
            case 8:
                document.getElementById("8").focus()
                break;
            case 9:
                document.getElementById("9").focus()
                break;
            case 10:
            case 11:
                document.getElementById("10").focus()
                break;
            case 12:
                document.getElementById("12").focus()
                break;
            case 13:
            case 14:
            case 15:
                document.getElementById("13").focus()
                break;
            case 16:
            case 17:
            case 18:
                document.getElementById("16").focus()
                break;
            default:
                setCount(1)
                break;
        }

    }, [count]);

    //Действия(сброс) при закрытии панели
    const closePanel = () => {
        onPlay()
        setCount(5)
        setVisible(false)
        setState(false)
        setNumberTel({
                value: ''
            }
        )

    }

//Действия при открытии Промо Финал
    const finalFunc = () => {
        setVisible(true)

        let count = 10

        // Запуск счетчика для автоматического закрытия окна
        setTimeout(
            function countFunc() {
                if (count > 1) {
                    setTimeout(countFunc, 1000)
                } else {
                    closePanel()
                }
                count--
                setTimeCount(count)
            }, 1000)

        document.getElementById("16").style.background = "#000000"
    }

    return (

        <div className="container-panel" style={styles}>

            <div className="panel">

                <div className="panel__text">
                    Введите ваш номер мобильного телефона
                </div>

                <InputMask
                    className="panel__number"
                    value={numberTel.value.replace(/[^0-9]/g, '')}
                    onChange={handleChange}
                    mask="+7 (999) 999-99-99"
                    maskChar={null}
                    placeholder="+7 (___) ___-__-__"
                    maxLength="18"
                />

                <div className="panel__subtext">
                    и с Вами свяжется наш менеждер для дальнейшей консультации
                </div>

                <div className="keyboard">

                    <div>
                        <button id="1" className="keyboard__btn" onClick={() => setAddNumber(1)}>1</button>
                        <button id="2" className="keyboard__btn" onClick={() => setAddNumber(2)}>2</button>
                        <button id="3" className="keyboard__btn" onClick={() => setAddNumber(3)}>3</button>
                    </div>

                    <div>
                        <button id="4" className="keyboard__btn" onClick={() => setAddNumber(4)}>4</button>
                        <button id="5" className="keyboard__btn" onClick={() => setAddNumber(5)}>5</button>
                        <button id="6" className="keyboard__btn" onClick={() => setAddNumber(6)}>6</button>
                    </div>

                    <div>
                        <button id="7" className="keyboard__btn" onClick={() => setAddNumber(7)}>7</button>
                        <button id="8" className="keyboard__btn" onClick={() => setAddNumber(8)}>8</button>
                        <button id="9" className="keyboard__btn" onClick={() => setAddNumber(9)}>9</button>
                    </div>

                    <div>
                        <button id="10" className="keyboard__delete" onClick={delFunc} name="del">СТЕРЕТЬ</button>
                        <button id="12" className="keyboard__btn" onClick={() => setAddNumber(0)}>0</button>
                    </div>

                </div>

                <div className="panel__agreement">
                    <input
                        type="checkbox"
                        id="cb1"
                        className="panel__agreement-checkbox"
                        onClick={handleChecked}
                        checked={state}/>

                    {/*Имитация checkbox поверх Input для изменения стиля*/}
                    <label htmlFor="cb1"></label>

                    <div className="panel__agreement-text">
                        Согласие на обработку персональных данных
                    </div>

                </div>

                <button id="13"
                        className="panel__confirm-btn"
                        onClick={finalFunc}
                        style={styleBtn}
                        disabled={disabled}>
                    ПОДТВЕРДИТЬ
                    НОМЕР
                </button>

            </div>

            //Запуск финального компонента с сообщением о принятии заявки
            {visible && <Final timeCount={timeCount}/>}

            <button id="16" className="container-panel__btn" onClick={closePanel}>
                <span className="container-panel__close"></span>
            </button>

            <div className="container-panel__info">
                <div className="container-panel__info-text">
                    Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
                </div>
                <div className="container-panel__info-qr">
                    <img src={process.env.PUBLIC_URL + "/images/qr.png"} alt="QR"/>
                </div>
            </div>

        </div>
    );
}

export default Panel;