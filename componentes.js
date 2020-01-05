//funcion que crea DIV+ checkbox + label

function divCheckLabel(inputvalue, div,formulario,name,numero) {

    var nuevoInput = document.createElement("input");
    var nuevaLabel = document.createTextNode(inputvalue);

    nuevoInput.setAttribute("type", "radio");
    nuevoInput.setAttribute("name", 'check');
    nuevoInput.setAttribute('id', inputvalue+''+name)
    nuevoInput.setAttribute("value", numero);
    div.appendChild(nuevoInput)
    div.appendChild(nuevaLabel)
    formulario.appendChild(div)



}


function formularioMasLabel(formulario,name,textolabel) {
    //var formulario = document.createElement('form')
    formulario.setAttribute('id', name)

    var labelFormulario = document.createTextNode(
        textolabel
    )

    formulario.appendChild(labelFormulario)

}





function anadirFormularioABody(formulario,div){
    
    document.body.appendChild(formulario.appendChild(div))
}
function eventoBoton(name,funcion){
    document
  .getElementById('boton'+name)
  .addEventListener('click', funcion, false)

}


function detenerEventoBoton(name,funcion){
    document
  .getElementById('boton'+name).removeEventListener('click', funcion, false)

}


//componnete que crea botones

function crearBoton(name,formulario){
    var nuevoBoton = document.createElement('input')
    nuevoBoton.setAttribute('type','submit')
    nuevoBoton.setAttribute('id','boton'+name) 
    nuevoBoton.setAttribute('value','Continuar')
    formulario.appendChild(nuevoBoton)
}


function deshabilitarBoton (name) {
  document.getElementById('boton'+name).disabled = false

}
