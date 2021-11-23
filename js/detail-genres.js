let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let id = qsToObject.get('id')
console.log(id);

let api_key = 'e200abfaa90988d674f8605d11e8b9d0';
let url = `https://api.themoviedb.org/3/genre/movie/list${id}?api_key=${api_key}`



    getElement

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let imagen = 'https://image.tmdb.org/t/p/w342'

        let img = document.querySelector('img')
        let titulosdetalles = document.querySelector('.titulosdetalles')
       
       
        img.src = imagen + data.poster_path;
        estreno.innerHTML += data.first_air_date;
        puntuacion.innerHTML += `${data.vote_average} ⭐`;
        duracion.innerHTML += `${data.number_of_seasons} temporadas` ;
        genero.innerHTML += `<a href= "genres.html">${data.genres[0].name}</a>`;
        informacion.innerHTML += data.overview;
        titulosdetalles.innerHTML += data.original_name;
        img.alt = data.title;
 
})
    