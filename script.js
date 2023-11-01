const apiurl = "https://rickandmortyapi.com/api/character"

async function character() {
    try {
        const response = await fetch(apiurl)
        const character = await response.json()
        console.log(character)

    } catch (error) {
        console.log(error)
    }
}
character();




