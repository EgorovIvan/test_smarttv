
const express = require("express");
const app = express();

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
    app.get('*', (req, res) => res.status(200).send({
        Answer: R
    }));
}

Program2([29, 27, 2, 3, 4, 5, 6, 7, 8, 9,])

// Запуск сервера
app.listen(4001, ()=>console.log("Сервер запущен..."));