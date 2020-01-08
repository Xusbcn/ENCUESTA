// COMPONENTE QUE CREA BOTONES
function crearBoton(div, boton, id, value, style) {
    boton = document.createElement('input')
    boton.setAttribute('type', 'button')
    boton.setAttribute('class', style)
    boton.setAttribute('id', id)
    boton.setAttribute('value', value)
    div.appendChild(boton)
}

//COMPONENTE QUE CREA DIV
function crearDiv(div, id, clase) {
    div.setAttribute('id', id)
    div.setAttribute('class', clase)
}

//COMPONENTE QUE AÑADE ATRIBUTOS A LOS FORMULARIOS
function crearAtributoFormulario(formulario, name, id) {
    //formulario = document.createElement('form')
    formulario.setAttribute('name', name)
    formulario.setAttribute('id', id)

}

//COMPONENTE QUE CREA LABEL
function crearLabel(div, name, label, formulario, style) {
    div = document.createElement('div')
    div.setAttribute('name', name)
    div.setAttribute('class', style)
    div.appendChild(label)
    formulario.appendChild(div)

}
// FUNCION CREAR RADIOBUTONS

function crearRadiobutons(formulario, div, radio, tipo, name, value, label, texto) {
    div = document.createElement('div')
    div.setAttribute('class', 'estiloradio')
    radio = document.createElement('input')
    radio.setAttribute('type', tipo)
    radio.setAttribute('name', name)
    radio.setAttribute('value', value)
    label = document.createTextNode(texto)
    div.appendChild(radio)
    div.appendChild(label)
    formulario.appendChild(div)
}

//FUNCION QUE CREA UN SEPARADOR ENTRE ENCUESTAS
function separadorEncuesta(formulario) {
    formulario.appendChild(document.createTextNode('*****************************************************************************************************************************'))
}


// FUNCION QUE CREA TEXTAREA
function crearTextArea(formulario, div, radio, ID) {

    div = document.createElement('div')
    radio = document.createElement('TEXTAREA')
    radio.setAttribute('id', ID)
    div.appendChild(radio)
    formulario.appendChild(div)
}

/// FUNCION ELEGIR ENTRE CUESTIONARIO 4 O 5

function elegirFuncione4e5() {
    if (document.getElementsByName('e3radio')[1].checked) {
        crearFormularioe4()
        document.getElementsByName('e3radio')[0].disabled = true
        document.getElementsByName('e3radio')[2].disabled = true
        document.getElementById('buttone3').disabled = true
    } else if (document.getElementsByName('e3radio')[0].checked || document.getElementsByName('e3radio')[2].checked) {
        crearFormularioe5()
        document.getElementsByName('e1radio')[1].disabled = true
        document.getElementById('buttone3').disabled = true
    }
}

// COMPONENTE QUE ELIGE LA FUNCION PARA CREAR FORMULARIO e2

function elegirFuncione2() {

    crearFormularioe2()
    document.getElementById('buttone4').disabled = true
    

}


function elegirFuncione25() {

    crearFormularioe2()
    document.getElementById('buttone5').disabled = true

}

//COMPONENTE QUE MUESTRA FORMULARIO e1.
function mostrarEncuesta() {

    crearFormularioe1()


    document.getElementById('contenedor_1').remove()
}


// FUNCION QUE RECOGE TODAS LAS RESPUESTAS SELECCIONADAS POR EL USUARIO 

function mostrarSeleccion(div) {
    var listaUL = []
    var listLI = []
    var listaP = []

    if (document.getElementsByName('e1radio')[1].checked) {

        creacionListaRespuesta('divlabel', 'e1radio', 0, 1, div)

    }
    if (document.getElementsByName('e1radio')[0].checked) {

        creacionListaRespuesta('divlabel', 'e1radio', 0, 0, div)

        if (document.getElementsByName('e3radio')[0].checked) {

            creacionListaRespuesta('divlabel', 'e3radio', 1, 0, div)

            multiRespuesta(5, div)

        } else if (document.getElementsByName('e3radio')[1].checked) {
            creacionListaRespuesta('divlabel', 'e3radio', 1, 1, div)

            multiRespuesta(4, div)

        } else if (document.getElementsByName('e3radio')[2].checked) {
            creacionListaRespuesta('divlabel', 'e3radio', 1, 2, div)

            multiRespuesta(5, div)
        }


    }
}


//COMPONENTE PARA LISTAR LAS PREGUNTAS Y SUS RESPUESTAS
function creacionListaRespuesta(label, radio, numero1, numero2, div) {
    var listaUL
    var listLI
    var listaP


    var listaP = document.createElement('p')
    listaP.setAttribute('class', 'myP')

    listaP.appendChild(document.createTextNode(document.getElementsByName(label)[numero1].innerText))
    document.getElementById(div).appendChild(listaP)


    var listaUL = document.createElement('ul')
    listaUL.setAttribute('class', 'myUL')
    var listLI = document.createElement('li')
    listLI.setAttribute('class', 'myLI')
    listLI.appendChild(document.createTextNode(document.getElementsByName(radio)[numero2].value))

    listaUL.appendChild(listLI)
    document.getElementById(div).appendChild(listaUL)


}



//FUNCION QUE RECOGE TODAS LAS RESPUESTA DE MULTISELECCION

function multiRespuesta(numero, div) {
    var checkboxtextareaseleccionado = document.getElementsByName('e' + numero + 'textareacheckbox')
    var checkboxseleccionado = document.getElementsByName('e' + numero + 'radio')
    var checkboxP = document.createElement('p')
    checkboxP.setAttribute('class', 'myP')
    checkboxP.appendChild(document.createTextNode(document.getElementsByName('divlabel')[2].innerText))
    document.getElementById(div).appendChild(checkboxP)

    for (var i = 0; i < checkboxseleccionado.length; i++) {

        if (document.getElementsByName('e' + numero + 'radio')[i].checked) {
            var listaUL = document.createElement('ul')
            listaUL.setAttribute('class', 'myUL')
            var listLI = document.createElement('li')
            listLI.setAttribute('class', 'myLI')
            listLI.appendChild(document.createTextNode(document.getElementsByName('e' + numero + 'radio')[i].value))

            listaUL.appendChild(listLI)
            document.getElementById(div).appendChild(listaUL)

        }

    }
    for (var j = 0; j < checkboxtextareaseleccionado.length; j++) {

        if (document.getElementsByName('e' + numero + 'textareacheckbox')[j].checked) {
            var listaUL = document.createElement('ul')
            listaUL.setAttribute('class', 'myUL')
            var listLI = document.createElement('li')
            listLI.setAttribute('class', 'myLI')
            listLI.appendChild(document.createTextNode(document.getElementById('textarea' + numero).value))

            listaUL.appendChild(listLI)
            document.getElementById(div).appendChild(listaUL)

        }

    }

}



//FUNCION QUE RECOGE VALOR DE TEXTAREA Y LO MUESTRA AL FINAL SI SE HA ESCRITO ALGO

function obtenerValorTextarea(div1, numero) {

    var listaUL = document.createElement('ul')
    listaUL.setAttribute('class', 'myUL')
    var listLI = document.createElement('li')
    listLI.setAttribute('class', 'myLI')
    var contenidoTextarea = document.getElementById('textareae' + numero).value

    if (contenidoTextarea != '') {
        listLI.appendChild(document.createTextNode(contenidoTextarea))


        document.getElementById(div1).appendChild(document.createTextNode('TU COMENTARIO FINAL: '))
        document.getElementById(div1).appendChild(document.createElement('br'))
        document.getElementById(div1).appendChild(listLI)
    }

}


//FUNCION QUE crea encuesta inicial y elimina pagina final

function volverAlInicio() {
    iniciarEncuestas()
    document.getElementById('botom').addEventListener('click', mostrarEncuesta, false)
    document.getElementById('contenedor_3').remove()
}

// FUNCION QUE ACTIVA BOTONES CUANDO SE SELECCIONA UNA OPCIÓN


function activarBoton(numero) {
    var listadeinputs = document.getElementsByName('e' + numero + 'radio')
    var checkboxtextareaseleccionado = document.getElementsByName('e' + numero + 'textareacheckbox')
    for (var i = 0; i < listadeinputs.length; i++) {
        document.getElementsByName('e' + numero + 'radio')[i].addEventListener('click', function() {
            document.getElementById('buttone' + numero).disabled = false;
        }, false)
    }
    for (var j = 0; j < checkboxtextareaseleccionado.length; j++) {
        document.getElementsByName('e' + numero + 'textareacheckbox')[j].addEventListener('click', function() {
            document.getElementById('buttone' + numero).disabled = false;
        }, false)
    }

}

