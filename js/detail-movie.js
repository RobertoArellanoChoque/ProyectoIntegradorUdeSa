let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let id = qsToObject.get('id') //convierto el qs a obj literal y capturo el id
console.log(id);

let api_key = 'e200abfaa90988d674f8605d11e8b9d0';
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`

fetch(url) 
    .then(function (response) {
        return response.json()
    })
    .then(function (data) { 
        console.log(data);

        let imagen = 'https://image.tmdb.org/t/p/w342'// selector

        let img = document.querySelector('img')
        let genero = document.querySelector('#genero')
        let puntuacion = document.querySelector('.puntuacion')
        let informacion = document.querySelector('.informacion')
        let titulosdetalles = document.querySelector('.titulosdetalles')
        let duracion = document.querySelector('.duracion')
        let botonFavoritos = document.querySelector('.botonFavoritos')
        let estreno = document.querySelector('.estreno')
        //capturo el dom via clases y id
    
        
        img.src = imagen + data.poster_path;
        img.alt= data.title
        estreno.innerHTML += data.release_date;
        puntuacion.innerHTML += `${data.vote_average} ⭐` ;
        duracion.innerHTML += `${data.runtime} minutos`;
        genero.innerHTML += `<a href="genres.html?id=${data.genres[0].id}">${data.genres[0].name}</a>`;
        informacion.innerHTML += data.overview;
        titulosdetalles.innerHTML += data.title;
        //inserto contenido a los elementos del dom capturados
    
        let favoritos = []
        let recuperoStorage = localStorage.getItem('favoritoPeliculas'); // traigo ,si es que hay algo en el storage
        
        console.log(recuperoStorage)
        if (recuperoStorage != null) { // != diferente
            favoritos = JSON.parse(recuperoStorage); //recuperoStorage viene en JSON y uso parse para descomprimirlo en un array y asi poder manipularlo

        }
        
        if(favoritos.includes(id)){ // si el array de favoritos tiene un id alguien agrego a favoritos algo y tiene que cambiar a quitar...
            botonFavoritos.innerText = 'QUITAR DE FAVORITOS'
        }
        else{
            botonFavoritos.innerText = 'AÑADIR A FAVORITOS❤️' // inverso a lo de arriba

        }
       
        
       botonFavoritos.addEventListener('click', function (event) {
            event.preventDefault(); // prevent default saca la propiedad de link al texto del boton
           

            if (favoritos.includes(id)){ // si apreto quitar de favoritos , quiero que me saque el id del array y que cambie el texto
                let idASacar = favoritos.indexOf(id); //capturo el id que quiero sacar
                favoritos.splice(idASacar, 1); // con la propiedad splice quito el id del array
                botonFavoritos.innerText = 'AÑADIR A FAVORITOS❤️'
            } else{
                favoritos.push(id); // si no esta el id nunca fue agregado por ende apreto añadir a favoritos , pushear el id y cambiar el texto
             botonFavoritos.innerText = 'QUITAR DE FAVORITOS'

            }
             let favoritoAString = JSON.stringify(favoritos); // con el JSON.stringify convierto array en json para guardar en storage devuelta
            localStorage.setItem('favoritoPeliculas', favoritoAString);
            console.log(localStorage)


        })
       
        
    })

    .catch(function (e) { // catch intercepta error y lo muestra en consola
        console.log(e);
    })


   
















