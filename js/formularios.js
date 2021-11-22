let formulario = document.querySelector('form')
let inputField = document.querySelector('.buscar') 
let mensaje ='Campo vacio';
let mensaje2 ='Minimo tres caracteres';

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    if (inputField.value ==""){
        alert(mensaje);
    } else if(inputField.value >= 1 && inputField.value <= 3){
        alert(mensaje2);
    
    } else {
        formulario.submit();
    }
})






