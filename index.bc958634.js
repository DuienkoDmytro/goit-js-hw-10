!function(){var e=document.querySelector(".breed-select"),n="https://api.thecatapi.com/v1/",t="live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM";fetch("".concat(n).concat("breeds","?$key=").concat(t)).then((function(e){if(console.log(e),!e.ok)throw new Error("примусово прокидаємо значення в кетч");return e.json()})).then((function(n){e.insertAdjacentHTML("beforeend",n.map((function(e){var n=e.name;return'<option select.breed-select value="name">"'.concat(n,'"</option>')})).join(""))})).catch((function(e){return console.error(e)}))}();
//# sourceMappingURL=index.bc958634.js.map
