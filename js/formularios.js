let formulario = document.querySelector('form')
let inputField = document.querySelector('.buscar')
let mensaje = document.querySelector('.mensaje')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    if (inputField.value ==""){
        mensaje.innerText ="Campo vacio"
    } 
    else if(inputField.value >= 1 ){
        this.submit

    }


})
