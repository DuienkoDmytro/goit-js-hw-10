!function(){var e="https://api.thecatapi.com/v1/";var n=document.querySelector(".breed-select"),t=document.querySelector(".cat-info");n.addEventListener("change",(function(n){var a=n.target.value;console.log(a),t.innerHTML="",c.classList.remove("is-hidden"),(i=a,fetch("".concat(e).concat("images/").concat(i)).then((function(e){if(console.log(e),!e.ok)throw new Error("прокидаємо значення в кетч");return e.json()}))).then(r).catch((function(){return o.classList.remove("is-hidden")})).finally((function(){return c.classList.add("is-hidden")}));var i}));var c=document.querySelector(".loader"),o=document.querySelector(".error");function r(e){var n=e.breeds,c=e.url;console.log(e);var o='<img src="'.concat(c,'" alt="').concat(n[0].name,'" width="400px">\n<div class="wrapper"><h2>').concat(n[0].name,"</h2>\n<p>").concat(n[0].description,"</p>\n<p><b>Temperament: </b>").concat(n[0].temperament,"</p></div>");t.insertAdjacentHTML("beforeend",o)}fetch("".concat(e).concat("breeds","?key=").concat("live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM")).then((function(e){return console.log(e),e.json()})).then((function(e){var t;n.insertAdjacentHTML("beforeend",(t=e,console.log(t),t.map((function(e){var n=e.reference_image_id,t=e.name;return'<option select.breed-select value="'.concat(n,'" >').concat(t,"</option>")})).join(""))),n.classList.remove("is-hidden")})).catch((function(){return o.classList.remove("is-hidden")})).finally((function(){return c.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.3634e631.js.map
