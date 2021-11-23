
let recuperoStoragePeliculas = localStorage.getItem('favoritoPeliculas');
let recuperoStorageSeries = localStorage.getItem('favoritoSeries');
let favoritosPeliculas = JSON.parse(recuperoStoragePeliculas);
let favoritosSeries = JSON.parse(recuperoStorageSeries);

const imagen = 'https://image.tmdb.org/t/p/w342'
let lista = document.querySelector('.peliculasFavoritas');
let listaSeries = document.querySelector('.seriesFavoritas');
let contenidoLista = '';

if (favoritosPeliculas == null&&favoritosSeries == null){
    lista.innerHTML = '<h2>No hay contenido seleccionado</h2>';
}

for (let i= 0; i<favoritosPeliculas.length; i++) {
    let api_key = 'e200abfaa90988d674f8605d11e8b9d0';
    let url = ` https://api.themoviedb.org/3/movie/${favoritosPeliculas[i]}?api_key=${api_key}`;

   
    fetch(url)
    .then(function(response){
        return response.json();
 })
.then(function(data){
    console.log(data);
    contenidoLista = 
    
    `  <article>
        <h2>${data.title}</h2>
        <img src=${imagen+data.poster_path}>
        <a href="">Ver contenido</a>
        </article>`
       console.log(data) 

    lista.innerHTML += contenidoLista;
})
.catch(function(error){
    console.log (error);
})
}


for (let i= 0; i<favoritosSeries.length; i++) {
    let api_key = 'e200abfaa90988d674f8605d11e8b9d0';
    let url = ` https://api.themoviedb.org/3/tv/${favoritosSeries[i]}?api_key=${api_key}`;

   
    fetch(url)
    .then(function(response){
        return response.json();
 })
.then(function(data){
   
    contenidoLista = 
    
    `  <article>
        <h2>${data.name}</h2>
        <img src=${imagen+data.poster_path}>
        <a href="">Ver contenido</a>
        </article>`
      

        listaSeries.innerHTML += contenidoLista;
})
.catch(function(error){
    console.log (error);
})
}

