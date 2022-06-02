/**
 * Funcion encargarda de crear la etiqueta radio y asignarle los valores.
 * @param {*} name 
 * @returns 
 */
const tagInputRadio = (name) =>{
    const responseQuestion = document.createElement("input");
    responseQuestion.type = "submit";
    responseQuestion.name = "question";   
    responseQuestion.value = name;
    return responseQuestion;
}

/**
 *  Funcion encargada de crear la etiqueta label
 *  @param { string } name es la 
 */
const tagLabel = (name) =>{
    const labelResponse = document.createElement('label');
    labelResponse.textContent = name;
    return labelResponse;
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
    const viewQuestion = document.createElement("input");
    viewQuestion.classList.add("display")
    viewQuestion.type = "text";
    viewQuestion.readOnly = true;
    viewQuestion.id = "viewQuestion";
    

    /**
     * Codigo encargado de llamar de manera dinamica 
     * y llamada las funciones que permiten crear las etiqueta label
     * y etiqueta radio
     */
    const conteinaerRadio = document.createElement("div");
    conteinaerRadio.classList.add("radio-response");
    let arr = ['A','B','C', 'D'];   
    arr.forEach( item => {
        conteinaerRadio.append(tagInputRadio(item));
    });

    /**
     * Creando un botton, el cual tiene como funcionalidad 
     * Enviar las respuestas y compararlas. 
     */
    const button = document.createElement('input');
    button.classList.add("button");
    button.type = "submit";
    button.textContent = "Enviar Respuesta";

    //Agregando los contenedores de las etiquetas.
    cuestionContiner.append(h1,viewQuestion, conteinaerRadio)
    container.append(cuestionContiner);
}


const hola = () =>{
    const siguiente = document.querySelector('.radio-response');

    siguiente.addEventListener('click', () =>{
        console.log('hola');
    });
}