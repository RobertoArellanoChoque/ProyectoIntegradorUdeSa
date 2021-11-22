console.log('Hola Mundo')

let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let palabra = qsToObject.get('buscar')
console.log(palabra);

let key = 'cd97ce54561a25ea3bbdfae70457a394';
let url = `https://api.themoviedb.org/3/search/multi?api_key=cd97ce54561a25ea3bbdfae70457a394&language=es&query=${palabra}`;

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let resultado = document.querySelector('#sectionBuscador')
        let resultadoNuevo = '';
        for(let i = 0; i < 3; i++){
            resultadoNuevo +=`<article>
                                 <img class="imagen" src="https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt="${info[i].title}" >
                                 <h3 class=tituoloprincipaldepelicula>
                                 <p class="titulopelicula" >${info[i].original_title}</p>
                                </h3>
                                <p class="titulopelicula" > Estreno:${info[i].release_date}</p>
                                </article>`

        }
        resultado.innerHTML = resultadoNuevo;

    })
    .catch(function (error) {
        console.log(error);

    })