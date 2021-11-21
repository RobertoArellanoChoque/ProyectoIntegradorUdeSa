console.log('Hola Mundo');

let formulario = document.querySelector('form')
let input = document.querySelector('.input')
let mensajeAviso = 'Campo vacio';

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    if(input.value ==""){
        alert(mensajeAviso);
        
    }


})
