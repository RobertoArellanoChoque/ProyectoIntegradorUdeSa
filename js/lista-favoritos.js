console.log('favoritos')

let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);


let lista = document.querySelector('.lista');
let contenidoLista = '';

if (favoritos == null ||  favoritos.length ==0){
    lista.innerHTML = '<h2>No hay contenido seleccionado</h2>';
}

for (let i= 0; i<favoritos.length; i++) {
    let url ='';}
   
    fetch(url)
    .then(function(response){
        return response.json();
 })
.then(function(data){
    console.log(data);
    contenidoLista += 
    
    `  <article>
        <h2>${data.data.title}</h2>
        <img>src=${data.data.images.original.url}>
        <a href="">Ver peliculas</a>
        </article>`
        

    lista.innerHTML = contenidoLista;
})
.catch(function(error){
    console.log (error);
})
