let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let id = qsToObject.get('id')
console.log(id);
 
let api_key = 'e200abfaa90988d674f8605d11e8b9d0'
let url = `
https://api.themoviedb.org/3/tv/${id}?api_key=e200abfaa90988d674f8605d11e8b9d0`
fetch(url)
.then(function(response){
    return response.json()
 
})
.then (function(data){
    console.log(data);
    let img = document.querySelector('img');
    img.src = data.data.images.original.url
 
 
    let favorito = []
 
    let linkfav = document.querySelector('a');
 
    linkfav.addEventListener ('click', function (event){
        event.preventDefault();
        favorito.push(id);
   
        let favoritoAString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosAString);
 
 
    })
 
})
