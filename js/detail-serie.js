let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let id = qsToObject.get('id')
console.log(id);
 
let api_key = 'e200abfaa90988d674f8605d11e8b9d0'
let url = `
https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`

let imagen = 'https://image.tmdb.org/t/p/w342'

let img = document.querySelector('img')
let genero = document.querySelector('#genero')

let puntuacion = document.querySelector('.puntuacion')

let informacion = document.querySelector('.informacion')

let titulosdetalles = document.querySelector('.titulosdetalles')
let duracion = document.querySelector('duracion')
let favorito = document.querySelector('.favorito')
let estreno = document.querySelector('.favorito')

let api_key = 'e200abfaa90988d674f8605d11e8b9d0';
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key} `
fetch(url)
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data);
        
        img.src = imagen + data.poster_path;
        estreno.innerHTML += data.first_air_date;
        puntuacion.innerHTML += `${data.vote_average} ⭐` ;
        duracion.innerHTML += data.number_of_seasons;
        genero.innerHTML += `<a href= "genres.html">${data.genres[0].name}</a>`;
        informacion.innerHTML += data.overview;
        titulosdetalles.innerHTML += data.title;
    
        let favoritoSerie = []

        let linkfav = document.querySelector('a');

        linkfav.addEventListener('click', function (event) {
            event.preventDefault();
            favorito.push(id);

            let favoritoAString = JSON.stringify(favoritoSerie);
            localStorage.setItem('favoritoSerie', favoritosAString);


        })

    })

