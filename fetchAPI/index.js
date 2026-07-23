// fetch = Function used for making HTTP requests to fetch resources.
//          (JSON style data, images, files)
//          simplifies asynchronous data fetching in Javascript and 
//          USED FOR INTERACTING WITH APIs to retrieve and send 
//          data asynchrounounsly over the web.
//          fetch(url, {options})

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(respose => console.log(respose))
    .catch(error => console.error());