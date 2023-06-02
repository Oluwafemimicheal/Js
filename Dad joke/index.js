const btn = document.getElementById('btn')
const jokeEl = document.getElementById('joke')

const API_KEY = "6TphOpctuuC4yhkilPbiIQ==H6qyWkOsJqpXTvYX"

const option = {
    method: 'GET',
    header: {
        'X-Api-Key': API_KEY
    }
}

const API_URL = "https://api.api-ninjas.com/v1/jokes?limit=1"
async function getJoke() {
    jokeEl.innerText = 'Updating...'
    btn.innerText = 'Loading'
    const respond = await fetch(API_URL, option)
    const data = await respond.json()

    console.log(data)

    jokeEl.innerText = data[0].joke

}

btn.addEventListener('click', getJoke)