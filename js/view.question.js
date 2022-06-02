import { questions as pregunta } from './preguntas.js';


const validateQuestion =  (selectionAnswer) => {
    let numberquestion = sessionStorage.getItem('numberQuestion');
    return (selectionAnswer === pregunta[numberquestion].correctResponse) ? true: false; 
}

const insertQuestion = (numberCuestion) => {
    let display = document.querySelector("#viewQuestion");
    display.innerText= `${pregunta[numberCuestion].questions}`; 
    
    let answer = document.querySelector("#response");
    answer.innerText = `${pregunta[numberCuestion].response}`;
}

const ramdom = () =>{
    let number = parseInt(Math.random() * (3 - 1) + 1);
    insertQuestion(number);
    sessionStorage.setItem('numberQuestion', number);
}

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

const activationsButtons = () =>{
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


const registerUser = () =>{
    desactivationsButtons();
    let name = prompt("Ingrese el nombre del jugador");
    // localStorage.setItem
}


export const viewCuestion = () =>{
    // Llamando el contenedor
    const container = document.querySelector('#container');

    const cuestionContiner = document.createElement("div");
    cuestionContiner.classList.add("cuestion-container");

    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.textContent = "Millones de Pregunas";

    /**
     * Constante encargada de realizar la creacion de 
     * la etiqueta input, para poder mostrar las preguntas
     */
    const divResponse = document.createElement("div");
    divResponse.classList.add("div-response");
    
    const viewQuestion = document.createElement("label");
    viewQuestion.classList.add("display")
    viewQuestion.id = "viewQuestion";

    const viewResponse = document.createElement("label");
    viewResponse.classList.add("display");
    viewResponse.id = "response";

    
    const responseA = document.createElement("input");
    responseA.id = "btnA";
    responseA.type = "submit";
    responseA.name = "question";
    responseA.disabled = true;
    responseA.value = 'A';
    responseA.onclick = () =>{
        const validation = validateQuestion('A');
        if(validation)
            ramdom();
        else 
            registerUser();
    }

    const responseB = document.createElement("input");
    responseB.id = "btnB";
    responseB.type = "submit";
    responseB.name = "question";
    responseB.disabled = true;   
    responseB.value = 'B';
    responseB.onclick = () => {
        const validation = validateQuestion('B');
        if(validation)
            ramdom();
        else 
            registerUser();
    };

    const responseC = document.createElement("input");
    responseC.id = "btnC";
    responseC.type = "submit";
    responseC.name = "question";
    responseC.disabled = true;   
    responseC.value = 'C';
    responseC.onclick = () =>{
        const validation = validateQuestion('C');
        if(validation)
            ramdom();
        else 
            registerUser();
    };

    const responseD = document.createElement("input");
    responseD.id = "btnD";
    responseD.type = "submit";
    responseD.name = "question";
    responseD.disabled = true;   
    responseD.value = 'D';
    responseD.onclick = () =>{
        const validation = validateQuestion('D');
        if(validation)
            ramdom();
        else 
            registerUser();
    };

    /**
     * Creando un botton, el cual tiene como funcionalidad 
     * Enviar las respuestas y compararlas. 
     */
    const button = document.createElement('input');
    button.classList.add("button");
    button.id = "startGame";
    button.type = "submit";
    button.textContent = "Iniciar Juego";
    button.onclick = () =>{
        ramdom();
        activationsButtons();
    };
    
    
    //Agregando los contenedores de las etiquetas.
    divResponse.append(responseA, responseB, responseC, responseD)
    cuestionContiner.append(h1,viewQuestion, viewResponse,divResponse, button); //
    container.append(cuestionContiner);
}
