import { questions as pregunta } from './preguntas.js';

/**
 * Funcion encargada de insertar las preguntas y respuestas en el html
 * @param {numberCuestion} el numero de la pregunta. 
 */
const insertQuestion = (numberCuestion) => {
    let display = document.querySelector("#viewQuestion");
    display.innerText= `${pregunta[numberCuestion].questions}`; 
    
    let answer = document.querySelector("#response");
    answer.innerText = `${pregunta[numberCuestion].response}`;
}

/**
 * Funcion encargada de crear numeros aleatorios para mostrar las preguntas.
 */
export const ramdom = () =>{
    let number = parseInt(Math.random() * (3 - 1) + 1);
    insertQuestion(number);
    sessionStorage.setItem('numberQuestion', number);
}

/**
 * Funcion para validar la respuesta correcta.
 * @param {selectionAnswer} variable que recibe la seleccion del usuario 
 * @returns retorna verdadero o falso con si la respuesta es correcta
 */
export const validateQuestion = (selectionAnswer) => {
    let numberquestion = sessionStorage.getItem('numberQuestion');
    return (selectionAnswer === pregunta[numberquestion].correctResponse) ? true: false; 
}
let count = 0;
export const points = (option = 2) =>{
    if(option == 1){
        count += 5;
        console.log(count);
        return count;
    }else{
        return count; 
    }
}

export const restarPoints = () =>{
    count = 0;
}

/**
 * Funcion encargada de invilitar los botones
 */
const desactivationsButtons = () =>{
    const btnA = document.querySelector('#btnA'),
        btnB = document.querySelector('#btnB'),
        btnC = document.querySelector('#btnC'),
        btnD = document.querySelector('#btnD'),
        startGame = document.querySelector('#startGame');

    btnA.disabled = true;    
    btnB.disabled = true;    
    btnC.disabled = true;    
    btnD.disabled = true;    
    startGame.disabled = false;
}

/**
 * Funcion encargada de Activar los botones
 */
export const activationsButtons = () =>{
    const btnA = document.querySelector('#btnA'),
        btnB = document.querySelector('#btnB'),
        btnC = document.querySelector('#btnC'),
        btnD = document.querySelector('#btnD'),
        startGame = document.querySelector('#startGame');

    btnA.disabled = false;    
    btnB.disabled = false;    
    btnC.disabled = false;    
    btnD.disabled = false;    
    startGame.disabled = true;
} 


export const registerUser = (puntos) =>{
    desactivationsButtons();
    let name = prompt("Ingrese el nombre del jugador");
    localStorage.setItem(name, JSON.stringify(puntos));
}
