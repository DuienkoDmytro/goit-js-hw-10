const breed_select = document.querySelector(`.breed-select`);
// breed_select.addEventListener(`click`, handlerSelect);

function fetchbreed(name) {   

    const BASE_URL = `https://api.thecatapi.com/v1/`;
    const API_KEY = `live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM`;
    const END_POINT = `images/search`;
    const BREEDS_END_POINT = `breeds`;

    const params = new URLSearchParams({
        key: API_KEY,
        id: name,
    })

    return fetch(`${BASE_URL}${BREEDS_END_POINT}${params}`)
    .then(resp => {
        console.log(resp)
        if (!resp.ok) {
            throw new Error(`примусово прокидаємо значення в кетч`)
        }
        return resp.json()
    })
    // .then(data => console.log(data))
    // .catch(err => console.error(err))
    // .finally(() => console.log(`finally`))
}

// function handlerSelect(e) {
//         e.preventDefault();
//         console.dir(e.currentTarget);
//     }