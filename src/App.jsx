import React from 'react'
import Main from "./components/UI/Main.jsx";
import "./components/UI/style/style.scss"


function App() {

    // let N, K, M, Sum, R1, R2, S

    function Program(N, K, M) {

        let Sum = 0
        let S = 0

        for (N; N >= K; N = (N - K)) {

            for (let i = K; i >= M; i = (i - M)) {
                Sum++
            }

            S = K % M
            N = N + S
        }
        console.log("Ответ 1: " + Sum)
    }

    Program(10, 5, 2)
    Program(13, 5, 3)
    Program(14, 5, 3)
    Program(13, 9, 4)

    function Program2(array) {

        let Sum = 0
        let R = 0
        for( let i = 0; i < array.length; i++) {
            Sum += array[i]
        }
        for( let i = 0; i < array.length; i++) {
            if (array[i] > Sum/array.length ) {
                R++
            }
        }
        console.log("Ответ 2: " + R)
    }

    Program2([29, 27, 11, 3, 4, 5, 6, 7, 8, 9,])

    return (
        <div className="wrapper">
            {/*Компонент основной страницы*/}
            <Main/>
        </div>
    );
}

export default App;
