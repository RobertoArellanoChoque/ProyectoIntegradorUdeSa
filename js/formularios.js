let formulario = document.querySelector('form')
let inputField = document.querySelector('.input')
let mensaje = document.querySelector('.mensaje')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    if (inputField.value== ""){
        mensaje.innerText ="Campo vacio"
    } else if (inputField.value.lenght < 3){
        mensaje.innerText ="Minimo 3 letras"
    }
    
})






