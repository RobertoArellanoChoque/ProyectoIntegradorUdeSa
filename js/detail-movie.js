let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let id = qsToObject.get('id')
console.log(id);


let api_key = 'e200abfaa90988d674f8605d11e8b9d0';
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key} ` 
fetch(url)
.then(function(response){
    return response.json()

})
.then (function(data){
    console.log(data);
    let img = document.querySelector('img');
    img.src = data.data.images.original.url
let calificacion = document.querySelector('.calificacion')
calificacion.innerHTML += ""
let puntuacion = document.querySelector('.puntuacion')
puntuacion.innerHTML += ""
let informacion = document.querySelector('.informacion')
informacion.innerHTML += ""
let sinopsis = document.querySelector('.sinopsis')
sinopsis.innerHTML += ""
let titulosdetalles = document.querySelector('.titulosdetalles')
titulosdetalles.innerHTML += ""
let favorito = document.querySelector('.favorito')
favorito.innerHTML += ""
    let favorito = []

    let linkfav = document.querySelector('a');

    linkfav.addEventListener ('click', function (event){
        event.preventDefault();
        favorito.push(id);
    
        let favoritoAString = JSON.stringify(favorito);
        localStorage.setItem('favoritosPeliculas', favoritosAString);


    })

})









    











    