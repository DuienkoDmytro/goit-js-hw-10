const breed_select = document.querySelector(`.breed-select`);
// breed_select.addEventListener(`click`, handlerSelect);

const BASE_URL = `https://api.thecatapi.com/v1/`;
    const API_KEY = `live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM`;
    const END_POINT = `images/search`;
const BREEDS_END_POINT = `breeds`;


function fetchbreed() {   
    // const params = new URLSearchParams({
    //     key: API_KEY,
        
    // })

    return fetch(`${BASE_URL}${BREEDS_END_POINT}?$key=${API_KEY}`)
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
fetchbreed()
    // .then(data => breed_select.InnerHTML = createMarkup(data))

    .then(data => { breed_select.insertAdjacentHTML("beforeend", createMarkup(data))})
    
    .catch(err => console.error(err))


// function handlerSelect(e) {
//         e.preventDefault();
//         console.dir(e.currentTarget);
//     }

function createMarkup(arr) {
    return arr.map(({ name }) =>
        `<option select.breed-select value="name">"${name}"</option>`).join(``)
    
}


function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}${END_POINT}?$key=${API_KEY}?breed_ids="${id}"`)
    .then(resp => {
        console.log(resp)
        if (!resp.ok) {
            throw new Error(`прокидаємо значення в кетч`)
        }
        return resp.json()
    })  
}


