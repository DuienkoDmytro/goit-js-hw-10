!function(){var n=document.querySelector(".breed-select"),e="https://api.thecatapi.com/v1/";fetch("".concat(e).concat("breeds","?$key=").concat("live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM")).then((function(n){if(console.log(n),!n.ok)throw new Error("примусово прокидаємо значення в кетч");return n.json()})).then((function(e){var c;n.insertAdjacentHTML("beforeend",(c=e,console.log(c),c.map((function(n){var e=n.id,c=n.name;return'<option select.breed-select value="'.concat(e,'">"').concat(c,'"</option>')})).join("")))})).catch((function(n){return console.error(n)}));var c=document.querySelector(".cat-info");n.addEventListener("change",fetch("".concat(e).concat("images/search/","?breed_ids")).then((function(n){if(console.log(n),!n.ok)throw new Error("прокидаємо значення в кетч");return n.json()})).then((function(n){var e;c.insertAdjacentHTML("beforeend",(e=n,console.log(e),e.map((function(n){var e=n.description,c=n.temperament,o=n.name,t=n.cfa_url;return'<img src = "'.concat(t,'" alt="').concat(o,'">\n<h2>"').concat(o,'"</h2>\n<p>"').concat(e,'"</p>\n<p>"').concat(c,'"</p>')})).join("")))})).catch((function(n){return console.error(n)})))}();
//# sourceMappingURL=index.7eb951f4.js.map
