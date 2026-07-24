// fetch = Function used for making HTTP requests to fetch resources.
//          (JSON style data, images, files)
//          simplifies asynchronous data fetching in Javascript and 
//          USED FOR INTERACTING WITH APIs to retrieve and send 
//          data asynchrounounsly over the web.
//          fetch(url, {options})








// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(respose => {
//         if (!respose.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return respose.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));



async function fetchData(){
    try{

        const pokemonNmae = document.getElementById("pokimonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNmae}`);

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';

    }
    catch(error){
        console.error(error);
    }
}