
console.log("Hola mundo")

let url = 'https://api.themoviedb.org/3/tv/popular?api_key=cd97ce54561a25ea3bbdfae70457a394'

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data.results);
    let info = data.results
    let prueba = document.querySelector('prueba')
    let pruebaLista = '';

    for(let i=0; i<info ; i++ ){
        pruebaLista += `<article>
                            <img src=${info[i].poster_path}>  
                            <p> Nombre:${info[i].name} </P>

                        </article>`
    }
    
})
.catch(function(error){
    console.log(error);
    
})



