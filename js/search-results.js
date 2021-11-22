console.log('Hola Mundo')

let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let palabra = qsToObject.get('buscar') //580489
console.log(palabra);

let key = 'cd97ce54561a25ea3bbdfae70457a394';
let url = `https://api.themoviedb.org/3/search/multi?api_key=cd97ce54561a25ea3bbdfae70457a394&language=es&query=${palabra}`;

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })