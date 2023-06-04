import { fetchbreed, fetchCatByBreed } from "./service/fetchbreed"; 
const breed_select = document.querySelector(`.breed-select`);
const catBlock = document.querySelector(`.cat-info`);
breed_select.addEventListener(`change`, searchCat);
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");

fetchbreed().then(data => {
        breed_select.insertAdjacentHTML("beforeend", createMarkup(data));
        breed_select.classList.remove("is-hidden")
    }).catch(() => error.classList.remove("is-hidden"))
    .finally(() => loader.classList.add("is-hidden"))



function createMarkup(arr) {
    console.log(arr)
    return arr.map(({reference_image_id, name} ) =>
        `<option select.breed-select value="${reference_image_id}" >${name}</option>`).join(``)
    
}

function searchCat(event) {
    catId = event.target.value
    console.log(catId);
    catBlock.innerHTML = "";
    loader.classList.remove("is-hidden");
    fetchCatByBreed(catId).then(createMarkupCat).catch(() => error.classList.remove("is-hidden")).finally(() => loader.classList.add("is-hidden"));
}


function createMarkupCat(arr) {
    const {breeds, url} = arr
    console.log(arr)
   const cat = `<img src="${url}" alt="${breeds[0].name}" width="400px">
<div class="wrapper"><h2>${breeds[0].name}</h2>
<p>${breeds[0].description}</p>
<p><b>Temperament: </b>${breeds[0].temperament}</p></div>`;
catBlock.insertAdjacentHTML(`beforeend`, cat);    
}