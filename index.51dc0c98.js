const e=document.querySelector(".breed-select"),n=document.querySelector(".cat-info");e.addEventListener("change",(function(e){let c=e.target.value;console.log(c),n.innerHTML="",t.classList.remove("is-hidden"),(r=c,fetch(`https://api.thecatapi.com/v1/images/${r}`).then((e=>{if(console.log(e),!e.ok)throw new Error("прокидаємо значення в кетч");return e.json()}))).then(o).catch((()=>s.classList.remove("is-hidden"))).finally((()=>t.classList.add("is-hidden")));var r}));const t=document.querySelector(".loader"),s=document.querySelector(".error");function o(e){const{breeds:t,url:s}=e;console.log(e);const o=`<img src="${s}" alt="${t[0].name}" width="400px">\n<div class="wrapper"><h2>${t[0].name}</h2>\n<p>${t[0].description}</p>\n<p><b>Temperament: </b>${t[0].temperament}</p></div>`;n.insertAdjacentHTML("beforeend",o)}fetch("https://api.thecatapi.com/v1/breeds?key=live_pbdyt1nFjwVFPtWnsD7nqlKWqcs401pTCUNTAeFoD7x6SmvCsCPrgs9ardZqKAMM").then((e=>(console.log(e),e.json()))).then((n=>{var t;e.insertAdjacentHTML("beforeend",(t=n,console.log(t),t.map((({reference_image_id:e,name:n})=>`<option select.breed-select value="${e}" >${n}</option>`)).join(""))),e.classList.remove("is-hidden")})).catch((()=>s.classList.remove("is-hidden"))).finally((()=>t.classList.add("is-hidden")));
//# sourceMappingURL=index.51dc0c98.js.map