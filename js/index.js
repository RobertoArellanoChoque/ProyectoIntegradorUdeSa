
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
        for (let i = 0; i < 5; i++) {
            pruebaLista += `<article>
                               <img class="imagen" src="${info[i].poster_path}" alt="${info[i].original_title}" >
                               <h3 class=tituoloprincipaldepelicula>
                               <a class="titulopelicula" href="detail-movie.html?id=${info[i].id}" >${info[i].original_title}</a>
                               </h3>
                               <p class="titulopelicula" > Estreno: ${info[i].release_date}</p>
                            </article>`
        }
        prueba.innerHTML = pruebaLista;
    })
    .catch(function (error) {
        console.log(error);

    })

let url2 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=cd97ce54561a25ea3bbdfae70457a394'


fetch(url2)
    .then(function (response) {
        return response.json()
    })
    .then(function (dataTopRated) {
        console.log(dataTopRated.results);
        let infoTop = dataTopRated.results
        let peliculas = document.querySelector('#peliculasTop')
        let peliculasNuevas = '';
        for (let i = 0; i < 5; i++) {
            peliculasNuevas += `<article>
                                  <img class="imagen" src="${infoTop[i].poster_path}" alt="${infoTop[i].original_title}" >
                                  <h3 class=tituoloprincipaldepelicula>
                                  <a class="titulopelicula" href="detail-movie.html?id=${infoTop[i].id}" >${infoTop[i].original_title}</a>
                                  </h3>
                                  <p class="titulopelicula" > Estreno: ${infoTop[i].release_date}</p>
                               </article>`
        }
        peliculas.innerHTML = peliculasNuevas;





    })
    .catch(function (error) {
        console.log(error);

    })

let url3 = 'https://api.themoviedb.org/3/tv/popular?api_key=cd97ce54561a25ea3bbdfae70457a394'

fetch(url3)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let infoSeries = data.results
        let series = document.querySelector('#seriesTop')
        let seriesNuevas = '';
        for (let i = 0; i < 5; i++) {
            seriesNuevas += `<article>
                               <img class="imagen" src="${infoSeries[i].poster_path}" alt="${infoSeries[i].name}" >
                               <h3 class=tituoloprincipaldepelicula>
                                <a class="titulopelicula" href="detail-series.html?id=${infoSeries[i].id}" >${infoSeries[i].name}</a>
                                </h3>
                                <p class="titulopelicula" > Estreno: ${infoSeries[i].first_air_date}</p>
                             </article>`
        }

        series.innerHTML = seriesNuevas;

    })

    .catch(function (error) {
        console.log(error);

    })




