import { ramdom, 
    validateQuestion, 
    activationsButtons,
    points,
    restarPoints, 
    registerUser,
} from './functionProgram.js';

import { createTable } from './view.table.js'

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
     * y las respuestas disponibles para que el usuario pueda seleccionar
     * la correcta
     */
    const divResponse = document.createElement("div");
    divResponse.classList.add("div-response");
    
    const viewQuestion = document.createElement("label");
    viewQuestion.classList.add("display")
    viewQuestion.id = "viewQuestion";

    const viewResponse = document.createElement("label");
    viewResponse.classList.add("display");
    viewResponse.id = "response";

    /**
     * Creacion de los botones los cuales 
     * podra usar el usuario para seleccionar la respuesta correcta
     */
    const responseA = document.createElement("input");
    responseA.id = "btnA";
    responseA.type = "submit";
    responseA.name = "question";
    responseA.disabled = true;
    responseA.value = 'A';
    /**
     * Evento que realiza la llamda de los eventos que validan la respuesta
     * y carga los puntos y si la respuesta es erronea, terminar el juego.
     */
    responseA.onclick = () =>{
        const validation = validateQuestion('A');
        if(validation){
            points(1);
            ramdom();
        }
        else{
            let puntos = points()
            registerUser(puntos);
        }
    }

    const responseB = document.createElement("input");
    responseB.id = "btnB";
    responseB.type = "submit";
    responseB.name = "question";
    responseB.disabled = true;   
    responseB.value = 'B';
      /**
     * Evento que realiza la llamda de los eventos que validan la respuesta
     * y carga los puntos y si la respuesta es erronea, terminar el juego.
     */
    responseB.onclick = () => {
        const validation = validateQuestion('B');
        if(validation){
            points(1);
            ramdom();
        }
        else{
            let puntos = points()
            registerUser(puntos);
        }
    };

    const responseC = document.createElement("input");
    responseC.id = "btnC";
    responseC.type = "submit";
    responseC.name = "question";
    responseC.disabled = true;   
    responseC.value = 'C';
     /**
     * Evento que realiza la llamda de los eventos que validan la respuesta
     * y carga los puntos y si la respuesta es erronea, terminar el juego.
     */
    responseC.onclick = () =>{
        const validation = validateQuestion('C');
        if(validation){
            points(1);
            ramdom();
        }
        else{
            let puntos = points()
            registerUser(puntos);
        }
    };

    const responseD = document.createElement("input");
    responseD.id = "btnD";
    responseD.type = "submit";
    responseD.name = "question";
    responseD.disabled = true;   
    responseD.value = 'D';
     /**
     * Evento que realiza la llamda de los eventos que validan la respuesta
     * y carga los puntos y si la respuesta es erronea, terminar el juego.
     */
    responseD.onclick = () =>{
        const validation = validateQuestion('D');
        if(validation){
            points(1);
            ramdom();
        }
        else{
            let puntos = points();
            registerUser(puntos, level);
        }
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
     /**
     * Relizar la llamada del inicio del juego 
     * y la llamada del metodo random,
     * activar los botones y 
     * activar los puntos
     */
    button.onclick = () =>{
        ramdom();
        activationsButtons();
        restarPoints();
    };
    
    // Llamando del metodo de la tabla.
    const table = createTable();

    /**
     * Realizar el agregado de los contenedores
     * y a la llamada del contenedor padre.
     */
    divResponse.append(responseA, responseB, responseC, responseD)
    cuestionContiner.append(h1,viewQuestion, viewResponse,divResponse, button); //
    container.append(cuestionContiner, table);
}

