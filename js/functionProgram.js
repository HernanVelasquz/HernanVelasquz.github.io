import { questions as pregunta } from './preguntas.js';

/**
 * Funcion encargada de relizar el registro de los puntos 
 * y nombre de los usuario para guardarlos en el localStorage
 * @param {int} puntos, variable que recibe para registrar las variables
 */
 export const registerUser = (puntos) => {
    desactivationsButtons();
    let name = prompt("Ingrese el nombre del jugador");
    localStorage.setItem(name, JSON.stringify(puntos));
}

/**
 * Funcion encargada de crear numeros aleatorios para mostrar las preguntas.
 */
 export const ramdom = () =>{
    let number = parseInt(Math.random() * (15 - 1) + 1);
    insertQuestion(number);
    sessionStorage.setItem('numberQuestion', number);
}

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
 * Funcion para validar la respuesta correcta.
 * @param {selectionAnswer} variable que recibe la seleccion del usuario 
 * @returns retorna verdadero o falso con si la respuesta es correcta
 */
export const validateQuestion = (selectionAnswer) => {
    let numberquestion = sessionStorage.getItem('numberQuestion');
    return (selectionAnswer === pregunta[numberquestion].correctResponse) ? true: false; 
}
let count = 0;
/**
 * Funcion para cargar los puntos del jugador
 * @param {number} option, encargada de verificar que sea una variable numerica
 * si es 1, se se le suma 5 puntos al juegador,
 * si es 2, se retorna los puntos que tenga almacenado el jugador.
 * @returns retorna los puntos que va ganando o retorna todos los puntos.
 */
export const points = (option = 2) =>{
    if(option == 1){
        count += 5;
        return count;
    }else{
        return count; 
    }
}
/**
 * Funcion encargada de restablecer los puntos del juegador
 */
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

