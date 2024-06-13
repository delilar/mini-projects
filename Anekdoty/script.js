document.addEventListener('DOMContentLoaded', async () => {

const joke = document.getElementById('anekdot');
const btn = document.getElementById('btn');

    async function getJoke() {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }

        const res = await fetch('https://cors-anywhere.herokuapp.com/icanhazdadjoke.com/', config)

        const data = await res.json()
        joke.innerHTML = data.joke

        data.catch(error => console.log(error))
    }

    btn.addEventListener('click', getJoke)

    await getJoke()

})
