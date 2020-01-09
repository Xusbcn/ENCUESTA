function iniciarEncuestas() {

    var divinicial0 = document.createElement('div')
    var divinicial1 = document.createElement('div')
        // var divinicial2 = document.createElement('div')
    var elementoH1 = document.createElement('h1')

    var boton
    var labelformulario = document.createTextNode('Encuesta de satisfacción del sistema de evaluación de M06 (AWS2)')
    elementoH1.appendChild(labelformulario)


    crearDiv(divinicial0, 'contenedor_0', 'clasediv')
    crearDiv(divinicial1, 'contenedor_1', 'contenedor')
        //crearDiv(divinicial2, 'contenedor_2', 'contenedor')


    divinicial1.appendChild(elementoH1)
    divinicial1.appendChild(document.createElement('br'))
    crearBoton(divinicial1, boton, 'botom', 'Comenzar Encuesta', 'estiloboton')

    divinicial0.appendChild(divinicial1)
        //divinicial0.appendChild(divinicial2)
    document.body.appendChild(divinicial0)

}



iniciarEncuestas()




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
    var divinicial2 = document.createElement('div')
    crearDiv(divinicial2, 'contenedor_2', 'contenedor')


    crearAtributoFormulario(formulario, 'e1', 'formularioe1')
    crearLabel(divlabel, 'divlabel', labelformulario, formulario, 'estilolabel')
    crearRadiobutons(formulario, divradio1, radiobuttons1, 'radio', 'e1radio', 'si', labelradio1, 'Si')

    //----para el segundo-----

    crearRadiobutons(formulario, divradio2, radiobuttons2, 'radio', 'e1radio', 'No', labelradio2, 'No')
        //CREAMOS EL BOTON CONTINUAR
    crearBoton(formulario, boton, 'buttone1', 'CONTINUAR', 'estiloboton botonmargine1')



    //AGREGAMOS EL FORMULARIO AL BODY
    document.body.appendChild(divinicial2)
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
    var labelformulario = document.createTextNode('¡Gracias por haber participado en esta encuesta!')
    var divrtextarea1
    var divrtextarea2
    var textArea1
    var labeltextArea1 = document.createTextNode('Puedes dejarnos un comentario en el siguiente recuadro:')
    var labeltextArea2 = document.createTextNode('Resumen de la encuesta:')


    crearAtributoFormulario(formulario, 'e2', 'formularioe2')
        //creamos la label y añadimos al formulario creado.
    separadorEncuesta(formulario)


    crearLabel(divlabel, 'divlabel', labelformulario, formulario, 'estilolabel labelresumen labeldiv')
        //creamos el conjunto de div + radiobutton + label ---para el primero--

    crearLabel(divrtextarea1, 'divlabeltextarea', labeltextArea1, formulario, 'estilolabel labelresumen')
    crearTextArea(formulario, divrtextarea1, textArea1, 'textareae2')
    crearLabel(divrtextarea2, 'divlabeltextarea', labeltextArea2, formulario, 'estilolabel labelresumen')

    //creamos div que contendrá el resumen de todas las respuestas

    var divseleccionusuario = document.createElement('div')
    divseleccionusuario.setAttribute('id', 'divrespuestas')

    //CREAMOS EL BOTON CONTINUAR

    formulario.appendChild(divseleccionusuario)

    crearBoton(formulario, boton, 'buttone2', 'FINALIZAR ENCUESTA', 'estiloboton botonmargin')



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
    crearLabel(divlabel, 'divlabel', labelformulario, formulario, 'estilolabel')
    crearRadiobutons(formulario, divradio1, radiobuttons1, 'radio', 'e3radio', 'Si', labelradio1, 'Si')
    crearRadiobutons(formulario, divradio2, radiobuttons2, 'radio', 'e3radio', 'NO', labelradio2, 'No')
    crearRadiobutons(formulario, divradio3, radiobuttons3, 'radio', 'e3radio', 'No lo se', labelradio3, 'No lo se')
    crearBoton(formulario, boton, 'buttone3', 'CONTINUAR', 'estiloboton botonmargin')


    //AGREGAMOS EL FORMULARIO AL BODY

    document.getElementById('contenedor_2').appendChild(formulario)
    document.getElementById('buttone3').disabled = true

    activarBoton(3)

    document.getElementById('buttone3').addEventListener('click', elegirFuncione4e5, false)

}

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
    crearLabel(divlabel, 'divlabel', labelformulario, formulario, 'estilolabel')
    crearRadiobutons(formulario, divcheckbox1, checkbuttons1, 'checkbox', 'e4radio', 'El sistema no evalua las competencias reales que necesita un profesional', labelcheckbox1, 'El sistema no evalua las competencias reales que necesita un profesional')
    crearRadiobutons(formulario, divcheckbox2, checkbuttons2, 'checkbox', 'e4radio', 'El sistema es injusto', labelcheckbox2, 'El sistema es injusto')
    crearRadiobutons(formulario, divcheckbox3, checkbuttons3, 'checkbox', 'e4radio', 'El sistema solo se puede aplicar a aquellos alumnos que cursan el módulo por evaluación continua', labelcheckbox3, 'El sistema solo se puede aplicar a aquellos alumnos que cursan el módulo por evaluación continua')

    crearRadiobutons(formulario, divcheckbox4, checkbuttons4, 'checkbox', 'e4textareacheckbox', 'Otros motivos', labeltextarea4, 'Otros motivos')
    crearTextArea(formulario, divcheckbox4, textArea4, 'textarea4')
        //CREAMOS EL BOTON CONTINUAR




    crearBoton(formulario, boton, 'buttone4', 'CONTINUAR', 'estiloboton botonmargin')


    //AGREGAMOS EL FORMULARIO AL BODY

    document.getElementById('contenedor_2').appendChild(formulario)

    //document.getElementById('buttone4').disabled = true
    document.getElementById('textarea4').disabled = true
        //document.getElementById('buttone4').addEventListener('click', elegirFuncione2, false)
    document.getElementById('buttone4').addEventListener('click', comprobarCheckboxTextarea, false)


    activarBotonchequi(4)



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
    crearLabel(divlabel, 'divlabel', labelformulario, formulario, 'estilolabel')


    crearRadiobutons(formulario, divcheckbox1, checkbuttons1, 'checkbox', 'e5radio', 'Es un sistema más motivador para el alumno', labelcheckbox1, 'Es un sistema más motivador para el alumno')
    crearRadiobutons(formulario, divcheckbox2, checkbuttons2, 'checkbox', 'e5radio', 'Es más justo para el alumno', labelcheckbox2, 'Es más justo para el alumno')


    crearRadiobutons(formulario, divcheckbox3, checkbuttons3, 'checkbox', 'e5radio', 'Es más claro y transparente para el alumno', labelcheckbox3, 'Es más claro y transparente para el alumno')

    crearRadiobutons(formulario, divcheckbox4, checkbuttons4, 'checkbox', 'e5radio', 'Ayuda al alumno a tener claros los objetivos', labelcheckbox4, 'Ayuda al alumno a tener claros los objetivos')

    crearBoton(formulario, boton, 'buttone5', 'CONTINUAR', 'estiloboton')

    // AGREGAMOS EL FORMULARIO AL BODY

    document.getElementById('contenedor_2').appendChild(formulario)
    //document.getElementById('buttone5').disabled = true
    //activarBoton(5)

    document.getElementById('buttone5').addEventListener('click', comprobarCheckbox, false)

}
//ACTIVAMOS EL BOTÓN QUE INICIARÁ LA ENCUESTA.
document.getElementById('botom').addEventListener('click', mostrarEncuesta, false)








function crearPaginaFinal() {


    var divpaginafinal = document.createElement('div')
    var divresumenfinal = document.createElement('div')
    var boton = document.createElement('input')
    var elementoH2 = document.createElement('h2')


    crearDiv(divpaginafinal, 'contenedor_3', 'contenedor')
    crearDiv(divresumenfinal, 'divresumen', 'classresumen')

    var labelformulario = document.createTextNode('RESUMEN DE TU ACTIVIDAD')
    elementoH2.appendChild(labelformulario)

    divpaginafinal.appendChild(elementoH2)



    divpaginafinal.appendChild(divresumenfinal)

    divpaginafinal.appendChild(document.createElement('br'))
        // divpaginafinal.appendChild(botonpaginafinal)
    crearBoton(divpaginafinal, boton, 'botonfinal', 'IR AL INICIO', 'estiloboton')
    document.body.appendChild(divpaginafinal)
    mostrarSeleccion('divresumen')
    obtenerValorTextarea('divresumen', 2)
    document.getElementById('contenedor_2').remove()

    document.getElementById('botonfinal').addEventListener('click', volverAlInicio, false)
}