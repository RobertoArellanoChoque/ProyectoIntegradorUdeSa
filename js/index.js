

let url = "https:api.themoviedb.org/3/movie/popular?api_key=cd97ce54561a25ea3bbdfae70457a394"
let queryString = location.search
let qsToObject = new URLSearchParams(queryString)
let id = qsToObject.get('id')

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data.results);
    let info = data.results
    let prueba = document.querySelector('#prueba')
    let pruebaLista = '';

    for(let i=0; i<5 ; i++){
        pruebaLista += `<article>
        <a href=""><img src="${info[i].poster_path}" alt=""></a>
                            <h3 class="tituloprincipaldepelicula" >
                            <p class="titulopelicula" >${info[i].title} </p>
                            </h3>
                            <p class="titulopelicula" >${info[i].release_date} </p>
                        </article>`
                       //<a href=""><img src="" alt=""></a>
    }
    prueba.innerHTML= pruebaLista

})
.catch(function(error){
    console.log(error);
    
})
/*<a href="detail-movie.html?=${info[i].id}><img class="imagen" src=${info[i].poster_path}</a> */


