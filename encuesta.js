function iniciarEncuestas() {

    var divinicial0 = document.createElement('div')
    var divinicial1 = document.createElement('div')
    var divinicial2 = document.createElement('div')

    var boton
    var labelformulario = document.createTextNode('Encuesta de satisfacción del sistema de evaluación de M06 (AWS2)')


    crearDiv(divinicial0, 'contenedor_0', 'clasediv')
    crearDiv(divinicial1, 'contenedor_1', 'contenedor')
    crearDiv(divinicial2, 'contenedor_2', 'contenedor')


    divinicial1.appendChild(labelformulario)
    divinicial1.appendChild(document.createElement('br'))
    crearBoton(divinicial1, boton, 'botom', 'Comenzar Encuesta')

    divinicial0.appendChild(divinicial1)
    divinicial0.appendChild(divinicial2)
    document.body.appendChild(divinicial0)



}


// FUNCION QUE CREA BOTONES
function crearBoton(div, boton, id, value) {
    boton = document.createElement('input')
    boton.setAttribute('type', 'button')
    boton.setAttribute('id', id)
    boton.setAttribute('value', value)
    div.appendChild(boton)
}

//FUNCION QUE CREA DIV
function crearDiv(div, id, clase) {
    div.setAttribute('id', id)
    div.setAttribute('class', clase)
}

//FUNCION QUE AÑADE ATRIBUTOS A LOS FORMULARIOS
function crearAtributoFormulario(formulario, name, id) {
    //formulario = document.createElement('form')
    formulario.setAttribute('name', name)
    formulario.setAttribute('id', id)

}

iniciarEncuestas()


//FUNCION QUE AÑADE ATRIBUTOS A LOS FORMULARIOS
function crearLabel(div, name, label, formulario) {
    div = document.createElement('div')
    div.setAttribute('name', name)
    div.appendChild(label)
    formulario.appendChild(div)

}
// FUNCION CREAR RADIOBUTONS

function crearRadiobutons(formulario, div, radio, tipo, name, value, label, texto) {
    div = document.createElement('div')
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


function crearFormularioe1() {

    var boton
    var formulario = document.createElement('form')
    var divlabel
    var labelformulario = document.createTextNode('¿Has cursado el Módulo M06 con el sistema de evaluación por Proyectos/Logros?')
    var divradio1
    var radiobuttons1
    var labelradio1
    var divradio2
    var radiobuttons2
    var labelradio2

    crearAtributoFormulario(formulario, 'e1', 'formularioe1')
    crearLabel(divlabel, 'divlabel', labelformulario, formulario)
    crearRadiobutons(formulario, divradio1, radiobuttons1, 'radio', 'e1radio', 'si', labelradio1, 'Si')

    //----para el segundo-----

    crearRadiobutons(formulario, divradio2, radiobuttons2, 'radio', 'e1radio', 'No', labelradio2, 'No')
    //CREAMOS EL BOTON CONTINUAR
    crearBoton(formulario, boton, 'buttone1', 'CONTINUAR')



    //AGREGAMOS EL FORMULARIO AL BODY

    document.getElementById('contenedor_2').appendChild(formulario)
    document.getElementById('buttone1').disabled = true

    activarBoton(1)
    document.getElementById('buttone1').addEventListener('click', elegirFuncione2e3, false)

}

// CREAMOS FUNCION QUE CREA LA ENCUESTA E2 O E3
function elegirFuncione2e3() {
    if (document.getElementsByName('e1radio')[0].checked) {
        crearFormularioe3()
        document.getElementsByName('e1radio')[1].disabled = true
        document.getElementById('buttone1').disabled = true
    }
    if (document.getElementsByName('e1radio')[1].checked) {
        crearFormularioe2()
        document.getElementsByName('e1radio')[0].disabled = true
        document.getElementById('buttone1').disabled = true
    }
}





//**********************ENCUESTA E2*************************** */

function crearFormularioe2() {

    var boton
    var formulario = document.createElement('form')
    var divlabel
    var labelformulario = document.createTextNode('Gracias por haber participado en esta encuesta')

    crearAtributoFormulario(formulario, 'e2', 'formularioe2')
    //creamos la label y añadimos al formulario creado.
    separadorEncuesta(formulario)


    crearLabel(divlabel, 'divlabel', labelformulario, formulario)
    //creamos el conjunto de div + radiobutton + label ---para el primero--

    var divrtextarea1
    var divrtextarea2

    var textArea1


    var labeltextArea1 = document.createTextNode('Puedes dejarnos un comentario en el siguiente recuadro')
    var labeltextArea2 = document.createTextNode('Resumen de la encuesta:')

    crearLabel(divrtextarea1, 'divlabeltextarea', labeltextArea1, formulario)
    crearTextArea(formulario, divrtextarea1, textArea1, 'textareae2')
    crearLabel(divrtextarea2, 'divlabeltextarea', labeltextArea2, formulario)

    //creamos div que contendrá el resumen de todas las respuestas

    var divseleccionusuario = document.createElement('div')
    divseleccionusuario.setAttribute('id', 'divrespuestas')

    //CREAMOS EL BOTON CONTINUAR

    formulario.appendChild(divseleccionusuario)

    crearBoton(formulario, boton, 'buttone2', 'FINALIZAR ENCUESTA')



    //AGREGAMOS EL FORMULARIO AL BODY

    document.getElementById('contenedor_2').appendChild(formulario)

    mostrarSeleccion('divrespuestas')

    document.getElementById('buttone2').addEventListener('click', crearPaginaFinal, false)


}

//**********************ENCUESTA E3*************************** */

function crearFormularioe3() {
    var boton
    var formulario = document.createElement('form')
    var divlabel
    var labelformulario = document.createTextNode('¿Crees que el sistema de evaluación por Proyectos/Logros es adecuado?')
    var divradio1
    var radiobuttons1
    var labelradio1
    var divradio2
    var radiobuttons2
    var labelradio2
    var divradio3
    var radiobuttons3
    var labelradio3

    crearAtributoFormulario(formulario, 'e3', 'formularioe3')
    separadorEncuesta(formulario)
    crearLabel(divlabel, 'divlabel', labelformulario, formulario)
    crearRadiobutons(formulario, divradio1, radiobuttons1, 'radio', 'e3radio', 'Si', labelradio1, 'Si')
    crearRadiobutons(formulario, divradio2, radiobuttons2, 'radio', 'e3radio', 'NO', labelradio2, 'NO')
    crearRadiobutons(formulario, divradio3, radiobuttons3, 'radio', 'e3radio', 'No lo se', labelradio3, 'No lo se')
    crearBoton(formulario, boton, 'buttone3', 'CONTINUAR')


    //AGREGAMOS EL FORMULARIO AL BODY

    document.getElementById('contenedor_2').appendChild(formulario)
    document.getElementById('buttone3').disabled = true

    activarBoton(3)

    document.getElementById('buttone3').addEventListener('click', elegirFuncione4e5, false)

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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**********************ENCUESTA E4*************************** */

function crearFormularioe4() {
    var boton
    var formulario = document.createElement('form')
    var divlabel
    var labelformulario = document.createTextNode('¿Explicanos porque crees que el sistema de evaluación porProyectos/Logros no es adecuado?')
    var divcheckbox1
    var checkbuttons1
    var labelcheckbox1
    var divcheckbox2
    var checkbuttons2
    var labelcheckbox2
    var divcheckbox3
    var checkbuttons3
    var labelcheckbox3
    var checkbuttons4
    var divcheckbox4
    var textArea4
    var labeltextarea4



    crearAtributoFormulario(formulario, 'e4', 'formularioe4')
    separadorEncuesta(formulario)
    crearLabel(divlabel, 'divlabel', labelformulario, formulario)
    crearRadiobutons(formulario, divcheckbox1, checkbuttons1, 'checkbox', 'e4radio', 'El sistema no evalua las competencias reales que necesita un profesional', labelcheckbox1, 'El sistema no evalua las competencias reales que necesita un profesional')
    crearRadiobutons(formulario, divcheckbox2, checkbuttons2, 'checkbox', 'e4radio', 'El sistema es injusto', labelcheckbox2, 'El sistema es injusto')
    crearRadiobutons(formulario, divcheckbox3, checkbuttons3, 'checkbox', 'e4radio', 'El sistema solo se puede aplicar a aquellos alumnos que cursan el módulo por evaluación continua', labelcheckbox3, 'El sistema solo se puede aplicar a aquellos alumnos que cursan el módulo por evaluación continua')

    crearRadiobutons(formulario, divcheckbox4, checkbuttons4, 'checkbox', 'e4textareacheckbox', 'Otros motivos', labeltextarea4, 'Otros motivos')
    crearTextArea(formulario, divcheckbox4, textArea4, 'textarea4')
    //CREAMOS EL BOTON CONTINUAR




    crearBoton(formulario, boton, 'buttone4', 'CONTINUAR')


    //AGREGAMOS EL FORMULARIO AL BODY

    document.getElementById('contenedor_2').appendChild(formulario)

    document.getElementById('buttone4').disabled = true
    document.getElementById('buttone4').addEventListener('click', elegirFuncione2, false)

    activarBoton(4)


}


// CREAMOS FUNCION ENCUESTA E2

function elegirFuncione2() {

    crearFormularioe2()
    document.getElementById('buttone4').disabled = true

}

//**********************ENCUESTA E5*************************** */

function crearFormularioe5() {
    var boton
    var formulario = document.createElement('form')
    var divlabel
    var labelformulario = document.createTextNode('¿Con cual de las siguientes afirmaciones estás de acuerdo? La evaluación por Proyectos/Logros es...')
    var divcheckbox1
    var checkbuttons1
    var labelcheckbox1
    var divcheckbox2
    var checkbuttons2
    var labelcheckbox2
    var divcheckbox3
    var checkbuttons3
    var labelcheckbox3
    var divcheckbox4
    var checkbuttons4
    var labelcheckbox4


    crearAtributoFormulario(formulario, 'e5', 'formularioe5')
    separadorEncuesta(formulario)
    crearLabel(divlabel, 'divlabel', labelformulario, formulario)


    crearRadiobutons(formulario, divcheckbox1, checkbuttons1, 'checkbox', 'e5radio', 'Es un sistema más motivador para el alumno', labelcheckbox1, 'Es un sistema más motivador para el alumno')
    crearRadiobutons(formulario, divcheckbox2, checkbuttons2, 'checkbox', 'e5radio', 'Es más justo para el alumno', labelcheckbox2, 'Es más justo para el alumno')


    crearRadiobutons(formulario, divcheckbox3, checkbuttons3, 'checkbox', 'e5radio', 'Es más claro y transparente para el alumno', labelcheckbox3, 'Es más claro y transparente para el alumno')

    crearRadiobutons(formulario, divcheckbox4, checkbuttons4, 'checkbox', 'e5radio', 'Ayuda al alumno a tener claros los objetivos', labelcheckbox4, 'Ayuda al alumno a tener claros los objetivos')

    crearBoton(formulario, boton, 'buttone5', 'CONTINUAR')

    // AGREGAMOS EL FORMULARIO AL BODY

    document.getElementById('contenedor_2').appendChild(formulario)
    document.getElementById('buttone5').disabled = true
    activarBoton(5)

    document.getElementById('buttone5').addEventListener('click', elegirFuncione25, false)

}

function elegirFuncione25() {

    crearFormularioe2()
    document.getElementById('buttone5').disabled = true

}





function mostrarEncuesta() {

    crearFormularioe1()


    document.getElementById('contenedor_1').remove()
}

document.getElementById('botom').addEventListener('click', mostrarEncuesta, false)


// FUNCION QUE RECOGE TODAS LAS LABEL CREADAS HASTA EL MOMENTO

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


//funcion para crear ul
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
            listLI.appendChild(document.createTextNode(document.getElementById('textareae' + numero).value))

            listaUL.appendChild(listLI)
            document.getElementById(div).appendChild(listaUL)

        }

    }

}



//FUNCION QUE RECOGE VALOR DE TEXTAREA

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



//funcion que recoge todos los hijos de un div


function crearPaginaFinal() {


    var divpaginafinal = document.createElement('div')
    var divresumenfinal = document.createElement('div')
    var boton = document.createElement('input')

    crearDiv(divpaginafinal, 'contenedor_3', 'contenedor')
    crearDiv(divresumenfinal, 'divresumen', 'classresumen')

    divpaginafinal.appendChild(document.createTextNode('Esta es la paginal final'))



    divpaginafinal.appendChild(divresumenfinal)

    divpaginafinal.appendChild(document.createElement('br'))
    // divpaginafinal.appendChild(botonpaginafinal)
    crearBoton(divpaginafinal, boton, 'botonfinal', 'IR AL INICIO')
    document.body.appendChild(divpaginafinal)
    mostrarSeleccion('divresumen')
    obtenerValorTextarea('divresumen', 2)
    document.getElementById('contenedor_2').remove()

    document.getElementById('botonfinal').addEventListener('click', volverAlInicio, false)
}

// FUNCION QUE ACTIVA BOTONES CUANDO SE SELECCIONA UNA OPCIÓN


function activarBoton(numero) {
    var listadeinputs = document.getElementsByName('e' + numero + 'radio')
    var checkboxtextareaseleccionado = document.getElementsByName('e' + numero + 'textareacheckbox')
    for (var i = 0; i < listadeinputs.length; i++) {
        document.getElementsByName('e' + numero + 'radio')[i].addEventListener('click', function () {
            document.getElementById('buttone' + numero).disabled = false;
        }, false)
    }
    for (var j = 0; j < checkboxtextareaseleccionado.length; j++) {
        document.getElementsByName('e' + numero + 'textareacheckbox')[j].addEventListener('click', function () {
            document.getElementById('buttone' + numero).disabled = false;
        }, false)
    }

}