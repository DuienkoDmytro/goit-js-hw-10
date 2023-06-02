const breed_select = document.querySelector(`.breed-select`);


const BASE_URL = `https://api.thecatapi.com/v1/`;
    const API_KEY = `live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM`;
    const END_POINT = `images/search/`;
const BREEDS_END_POINT = `breeds`;
let breedId = "${id}";



function fetchbreed() {   
  
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
 

    .then(data => { breed_select.insertAdjacentHTML("beforeend", createMarkup(data))})
    
    .catch(err => console.error(err))



function createMarkup(arr) {
    console.log(arr)
    return arr.map(({ id, name }) =>
        `<option select.breed-select value="${id}">"${name}"</option>`).join(``)
    
}




function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}${END_POINT}?breed_ids`)
    .then(resp => {
        console.log(resp)
        if (!resp.ok) {
            throw new Error(`прокидаємо значення в кетч`)
        }
        return resp.json()
    })  
}

const catBlock = document.querySelector(`.cat-info`);
breed_select.addEventListener(`change`, fetchCatByBreed()
.then(data => { catBlock.insertAdjacentHTML("beforeend", createMarkupCat(data))})
    
.catch(err => console.error(err))
);

function createMarkupCat(arr) {
    console.log(arr)
    return arr.map(({ description, temperament, name, cfa_url }) =>
    `<img src = "${cfa_url}" alt="${name}">
<h2>"${name}"</h2>
<p>"${description}"</p>
<p>"${temperament}"</p>`).join(``)

    
}
