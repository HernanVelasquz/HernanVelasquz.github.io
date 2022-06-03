/**
 * La finalidad de este archivo es tener centralizada la creacion de la tabla
 * html, con la cual se pude mostrar la informacion de los jugadores  sus puntajes en el
 * pagina web.
 */


/**
 * Funcion encargada de crear la etiqueta tr, y retornarla.
 * @returns 
 */
const createTr = () => {
    const tr = document.createElement("tr");
    tr.classList.add("celda");
    return tr
}

/**
 * Funcion encargada de crear la etiqueta th, y agregarle contenido a esta.
 * @param {string} name, encargada de recibir el contenido que se insertara en la etiqueta html
 * @returns retorna una etiqueta th, con el contenido insertado en ella.
 */
const createTh = (name = "") => {
    const th = document.createElement("th");
    th.classList.add("th-class");
    th.textContent = name;
    return th;
}

/**
 * Funcion encargada de crear la tiqueta td, y agregarle el contenido 
 * @param {string} conten, variable encargada de recibir la infromacion agregar en la etiqueta
 * @returns retorna una etiqueta td, con el contenieo insertado en ella..
 */
const createTd = (conten = "") => {
    const td = document.createElement("td");
    td.classList.add("td-class");
    td.textContent = conten;
    return td;
}

/**
 * Funcion encargada de realizar la vista de la tabla de los
 * jugadores y sus puntos.
 * @returns retorna la tabla y sus elementos.
 */
export const createTable = () =>{
    // creando el elemento table html
    const table = document.createElement("table");
    table.classList.add("table-information");

    // crear un elemento thead html
    const thead = document.createElement("thead");
    thead.classList.add("table-head");

    /**
     * Reliza la llamada de las funciones que crean las etiquetas
     * tr
     * th
     */
    let trTitle = createTr();
    let name = createTh("Nombre");
    let puntos = createTh("puntos");

    // Crea el elemento html tbody
    const tbody = document.createElement("tbody");
    tbody.classList.add("table-body");

    
    /**
     * Ciclo encargado de realizar la llamada del localStorage
     * para recorrerlo y realizar la llamada de las funciones 
     * tr
     * td
     * y lo agrega a la etiqeta tr que se creo con anterioridad
     * con la informacion e insertarla en la etiqueta td
     */
    for (let [key, value] of Object.entries(localStorage)) {
        let trBody = createTr();
        trBody.append(createTd(key));
        trBody.append(createTd(value));
        tbody.append(trBody);
    }


    // Realizar la insercion de las etiquetas a la etiqueta table.
    trTitle.append(name, puntos);
    thead.append(trTitle);
    table.append(thead, tbody);

    return table;
}