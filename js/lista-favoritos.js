
let recuperoStoragePeliculas = localStorage.getItem('favoritoPeliculas'); // agarro el id pusheado porque traigo lo que esta en el storage 
let recuperoStorageSeries = localStorage.getItem('favoritoSeries');
let favoritosPeliculas = JSON.parse(recuperoStoragePeliculas); //lo convierto en algo manipulable
let favoritosSeries = JSON.parse(recuperoStorageSeries);

const imagen = 'https://image.tmdb.org/t/p/w342'
let lista = document.querySelector('.peliculasFavoritas'); //capturo el dom de favoritos
let listaSeries = document.querySelector('.seriesFavoritas');
let contenidoLista = ''; // creo una lista vacia

if (favoritosPeliculas == null&&favoritosSeries == null){ //si no hay contenido en favoritos que aparzca el texto correspondiente
    lista.innerHTML = '<h2>No hay contenido seleccionado</h2>';
}

for (let i= 0; i<favoritosPeliculas.length; i++) {   // recorre el largo del array uno por uno
    let api_key = 'e200abfaa90988d674f8605d11e8b9d0';
    let url = ` https://api.themoviedb.org/3/movie/${favoritosPeliculas[i]}?api_key=${api_key}`;

   
    fetch(url)
    .then(function(response){
        return response.json();
 })
.then(function(data){
    console.log(data);
    contenidoLista = // elementos a insetar en contenidoLista
    
    ` 
    <a class="peliculasFavoritas" href="detail-movie.html?id=${data.id}">
    <article>
        <h2>${data.title}</h2>
        <img src=${imagen+data.poster_path}>
       
        </article>
        </a>`
       console.log(data) 

    lista.innerHTML += contenidoLista; // inserta todo 
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
    
    `  
    <a class="peliculasFavoritas" href="detail-series.html?id=${data.id}">
    <article>
        <h2>${data.name}</h2>
        <img src=${imagen+data.poster_path}>
        </article>
    </a>
    `
      

        listaSeries.innerHTML += contenidoLista;
})
.catch(function(error){
    console.log (error);
})
}

