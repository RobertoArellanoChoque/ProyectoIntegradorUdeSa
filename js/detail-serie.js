let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let id = qsToObject.get('id')
console.log(id);

let api_key = 'e200abfaa90988d674f8605d11e8b9d0';
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key} `

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
        estreno.innerHTML += data.first_air_date;
        puntuacion.innerHTML += `${data.vote_average} ⭐`;
        duracion.innerHTML += `${data.number_of_seasons} temporadas` ;
        genero.innerHTML += `<a href= "genres.html">${data.genres[0].name}</a>`;
        informacion.innerHTML += data.overview;
        titulosdetalles.innerHTML += data.original_name;
        img.alt = data.title;

        let favoritoSerie = []
        let recuperoStorage = localStorage.getItem('favoritos');
        
            
        if (recuperoStorage != null) {
            favoritos = JSON.parse(recuperoStorage);
        }
         

        if(favoritos.includes(id)){
            letrasfavoritos.innerText = 'QUITAR DE FAVORITOS'
        }
       

        botonFavoritos.addEventListener('click', function (event) {
            event.preventDefault();
            favoritos.push(id);
            botonFavoritos.innerText = 'QUITAR DE FAVORITOS';
            if (favoritos.includes(id)){
                let idASacar = favoritos.indexOf(id);
                favoritos.splice(idASacar, 1);
                letrasfavoritos.innerText = 'QUITAR DE FAVORITOS'
            } else{
                favoritos.push(id);
             letrasfavoritos.innerText = 'QUITAR DE FAVORITOS'

            }
             let favoritoAString = JSON.stringify(favoritos);
            localStorage.setItem('favoritoPeliculas', favoritoAString);
            console.log(localStorage)


        })
       
        
    })

    .catch(function (e) {
        console.log(e);
    })