let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let id = qsToObject.get('id') //580489
console.log(id);

let api_key = 'e200abfaa90988d674f8605d11e8b9d0';
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key} `

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let imagen = 'https://image.tmdb.org/t/p/w342'

        let img = document.querySelector('img')
        let genero = document.querySelector('#genero')
        let puntuacion = document.querySelector('.puntuacion')
        let informacion = document.querySelector('.informacion')
        let titulosdetalles = document.querySelector('.titulosdetalles')
        let duracion = document.querySelector('.duracion')
        let botonFavoritos = document.querySelector('.botonFavoritos')
        let estreno = document.querySelector('.estreno')
        
        img.src = imagen + data.poster_path;
        img.alt= data.title
        estreno.innerHTML += data.release_date;
        puntuacion.innerHTML += `${data.vote_average} ⭐` ;
        duracion.innerHTML += `${data.runtime} minutos`;
        genero.innerHTML += `<a href="genres.html?id=${data.genres[0].id}">${data.genres[0].name}</a>`;
        informacion.innerHTML += data.overview;
        titulosdetalles.innerHTML += data.title;
    
        let favorito = []

        botonFavoritos.addEventListener('click', function (event) {
            event.preventDefault();
            favorito.push(id);

            let favoritoAString = JSON.stringify(favorito);
            localStorage.setItem('favoritoPeliculas', favoritoAString);


        })

    })





















