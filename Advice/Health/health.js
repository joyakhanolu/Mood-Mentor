const jokes = 'https://sv443.net/jokeapi/v2/joke/programming';
const btn = document.querySelector('.button');
btn.onclick = () => {
    document.querySelector('.gif').classList.remove('w3-hide');
    fetch(jokes)
        .then(response => response.json())
        .then(data => {
            
            if (data.type  == 'single'){
                document.getElementById('jokeDisplay').innerHTML = `
                    <p>${data.joke}</p>
                    `;
            }
            if (data.type == 'twopart'){
                document.getElementById('jokeDisplay').innerHTML = `
                    <p>${data.setup}</p>
                    <p>${data.delivery}</p>
                    `;
            }
        })
        .catch(error => {
            throw new Error(data.error_message);
    });
}