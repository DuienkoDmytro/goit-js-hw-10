const breed_select = document.querySelector(`.breed-select`);


const BASE_URL = `https://api.thecatapi.com/v1/`;
    const API_KEY = `live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM`;
    const END_POINT = `images/`;
const BREEDS_END_POINT = `breeds`;
let breedId = "${reference_image_id}";



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
    return arr.map(({reference_image_id, name} ) =>
        `<option select.breed-select value="${reference_image_id}" >"${name}"</option>`).join(``)
    
}




function fetchCatByBreed(breedId) {
    
  return fetch(`${BASE_URL}${END_POINT}${breedId}`)
    .then(resp => {
        console.log(resp)
        if (!resp.ok) {
            throw new Error(`прокидаємо значення в кетч`)
        }
        return resp.json()
    })  
}

const catBlock = document.querySelector(`.cat-info`);
breed_select.addEventListener(`change`, searchCat);
// .then(data => { catBlock.insertAdjacentHTML("beforeend", createMarkupCat(data))})
    
// .catch(err => console.error(err))
// );
function searchCat(event) {
    catId = event.target.value
    console.log(catId);
    fetchCatByBreed(catId).then(createMarkupCat);
}


function createMarkupCat(arr) {
    const {breeds, url} = arr
    console.log(arr)
   const cat = `<img src = "${url}" alt="${breeds[0].name}">
<h2>"${breeds[0].name}"</h2>
<p>"${breeds[0].description}"</p>
<p>"${breeds[0].temperament}"</p>`;
catBlock.insertAdjacentHTML(`beforeend`, cat);    
}