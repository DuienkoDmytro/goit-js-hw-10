let e,t=e=>e;const n=document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds?$key=live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM").then((e=>{if(console.log(e),!e.ok)throw new Error("примусово прокидаємо значення в кетч");return e.json()})).then((e=>{var t;n.insertAdjacentHTML("beforeend",(t=e,console.log(t),t.map((({reference_image_id:e,name:t})=>`<option select.breed-select value="${e}" >"${t}"</option>`)).join("")))})).catch((e=>console.error(e)));const o=document.querySelector(".cat-info");function r(n){const{breeds:o,url:r}=n;return console.log(n),n({breeds:o,url:r}(e||(e=t`<img src = "${0}" alt="${0}">
<h2>"${0}"</h2>
<p>"${0}"</p>)
<p>"${0}"</p>`),r,o[0].name,o[0].name,o[0].description,o[0].temperament)).join("")}n.addEventListener("change",(function(e){catId=e.target.value,console.log(catId),(t=catId,fetch(`https://api.thecatapi.com/v1/images/${t}`).then((e=>{if(console.log(e),!e.ok)throw new Error("прокидаємо значення в кетч");return e.json()}))).then(r);var t})),o.insertAdjacentHTML("beforeend",r());
//# sourceMappingURL=index.e2f86659.js.map
