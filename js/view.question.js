import { questions as pregunta } from './preguntas.js';

const insertQuestion = (numberCuestion) => {
    const display = document.querySelector("#viewQuestion");
    display.innerText= `${pregunta[numberCuestion].questions}`; 
}

const iniciar = () =>{
    let number = parseInt(Math.random() * (3 - 1) + 1);
    insertQuestion(number);
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

    const viewQuestion = document.createElement("input");
    viewQuestion.classList.add("display")
    viewQuestion.type = "text";
    viewQuestion.readOnly = true;
    viewQuestion.id = "viewQuestion";
    
    const responseA = document.createElement("input");
    responseA.id = "btnA";
    responseA.type = "submit";
    responseA.name = "question";   
    responseA.value = 'A';
    responseA.onclick = () =>{
        console.log('A');
    }

    const responseB = document.createElement("input");
    responseB.id = "btnB";
    responseB.type = "submit";
    responseB.name = "question";   
    responseB.value = 'B';
    responseB.onclick = () =>{
        console.log('B');
    };

    const responseC = document.createElement("input");
    responseC.id = "btnC";
    responseC.type = "submit";
    responseC.name = "question";   
    responseC.value = 'C';
    responseC.onclick = () =>{
        console.log('C');
    };

    const responseD = document.createElement("input");
    responseD.id = "btnD";
    responseD.type = "submit";
    responseD.name = "question";   
    responseD.value = 'D';
    responseD.onclick = () =>{
        console.log('D');
    };

    /**
     * Creando un botton, el cual tiene como funcionalidad 
     * Enviar las respuestas y compararlas. 
     */
    const button = document.createElement('input');
    button.classList.add("button");
    button.type = "submit";
    button.textContent = "Iniciar Juego";
    button.onclick = iniciar;
    
    
    //Agregando los contenedores de las etiquetas.
    divResponse.append(responseA, responseB, responseC, responseD)
    cuestionContiner.append(h1,viewQuestion, divResponse, button); //
    container.append(cuestionContiner);
}
