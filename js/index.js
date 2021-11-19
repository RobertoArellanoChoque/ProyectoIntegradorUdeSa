
let url = 'https://api.themoviedb.org/3/movie/popular?api_key=cd97ce54561a25ea3bbdfae70457a394'

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.results);
        let info = data.results
        let prueba = document.querySelector('#prueba')
        let pruebaLista = '';
        for (let i=0; i<5; i++ ){
            pruebaLista += `<article>
                               <img class="imagen" src="${info[i].poster_path}">
                               <h3 class=tituoloprincipaldepelicula>
                               <p class="titulopelicula"> Pelicula: ${info[i].original_title}</p>
                               </h3>
                               <p class="titulopelicula" > Estreno: ${info[i].release_date}</p>
                            </article>`
        }
        prueba.innerHTML = pruebaLista;
    })
    .catch(function (error) {
        console.log(error);

    })


