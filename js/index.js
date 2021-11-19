let queryString = location.search
let qsToObject = new URLSearchParams(queryString)
let id = qsToObject.get('id')


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
                          <img class="imagen" src="${info[i].poster_path}>
                          <h3> Nombre:${info[i].title} </h3>
                        </article>`
        }
        
    })
    .catch(function (error) {
        console.log(error);

    })


