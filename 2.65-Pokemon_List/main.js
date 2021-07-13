const xhr = new XMLHttpRequest()


xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const dataJSON = xhr.responseText
        //returned a string
        const data = JSON.parse(dataJSON)
        const pokemonList = data.objects[0].pokemon
        console.log(pokemonList)
        // returned an object
        createPokemonList(pokemonList)
    } else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log("ERROR HANDLING")
    }
}

const createPokemonList = arr => {
    for(let i = 0; i < 10; i++){
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
        const div = document.createElement("div")
        div.textContent = arr[i].resource_uri
        div.style.fontSize = "1rem"
        h1.appendChild(div)
    }
} // change 2nd parameter of "i < 10" so that 10 is arr.length to get full list... stuck with 10 for brevity