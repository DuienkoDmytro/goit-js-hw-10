const BASE_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = `live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM`;
const END_POINT = `images/`;
const BREEDS_END_POINT = `breeds`;
let breedId = "${reference_image_id}";   


export function fetchbreed() {   
  
    return fetch(`${BASE_URL}${BREEDS_END_POINT}?key=${API_KEY}`)
    .then(resp => {
        console.log(resp)
        // if (!resp.ok) {
        //     throw new Error(`примусово прокидаємо значення в кетч`)
        // }
        return resp.json()
    })
    // .then(data => console.log(data))
    // .catch(err => console.error(err))
    // .finally(() => console.log(`finally`))
}


export function fetchCatByBreed(breedId) {
    
  return fetch(`${BASE_URL}${END_POINT}${breedId}`)
    .then(resp => {
        console.log(resp)
        if (!resp.ok) {
            throw new Error(`прокидаємо значення в кетч`)
        }
        return resp.json()
    })  
}