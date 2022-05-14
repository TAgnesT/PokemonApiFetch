const button = document.getElementById("btn");
const inputpoke = document.getElementById("inputpoke");
const img = document.getElementById("pokemonimg");
const name = document.getElementById("pokemonname");

button.addEventListener("click", async function getPokemons(){

        await fetch(`https://pokeapi.co/api/v2/pokemon/${inputpoke.value}`)
        .then(response => response.json())
        .then (response => {
             console.log(response);
        
        img.setAttribute("src", response.sprites.front_default);
        name.innerText = response.name;
        
        inputpoke.value = "";

    })
    
    
    getPokemons();
})






/*
const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;



async function fetchPokemons(){

    await fetch(url)
    .then(response => response.json())
    .then(response => {

        let output = "";

        response.forEach((adat)=>{
            
            output += `
                <h4>Name:${adat.name}</h4>
                <a href='${adat.url}'>Link</a>
            `;
        })

        document.getElementById("pokemonresult").innerHTML = output;
    })
}

fetchPokemons();
*/



/*document.getElementById("btn").addEventListener("click", ()=>{

    async function fetchPokemons(){

        const response = await fetch("https://gist.githubusercontent.com/Petesta/d2f0023245f2abcd3bf177800e9bd6df/raw/8527a3253985a3100d6302f267d46857bd255ede/pokeapi.json");

        const pokemonlist = await response.json();

        let output = "";

        pokemonlist.forEach((data) => {

            output += `
                <div>
                    <h4>Name:${data.name}</h4>
                    <a href='${data.url}'>Link</a>
                </div>
            `;

        });

        document.querySelector(".pokemonresult").innerHTML = output;
    }

    fetchPokemons();

})*/