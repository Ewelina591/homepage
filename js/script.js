console.log("cześć")

let przycisk = document.querySelector(".header__button");
let przycisk2 = document.querySelector(".header__button2");
let alternativeBackground = document.querySelector(".body__alternativeBackground");
let body = document.querySelector(".body");

let pustyniaOzachodzie = document.querySelector(".image__main");
let imgGobi = document.querySelector(".js-Gobi__desert");
let imgSahara = document.querySelector(".js-Sahara__desert");
let imgNamib = document.querySelector(".js-Namib__desert");
let imgAtakama = document.querySelector(".js-Atakama__desert");
let table = document.querySelector(".table");
let disappear = document.querySelector(".image__disappear");



przycisk.addEventListener("click", () => {
    pustyniaOzachodzie.classList.toggle("image__disappear");
    imgGobi.classList.toggle("image__disappear");
    imgSahara.classList.toggle("image__disappear");
    imgNamib.classList.toggle("image__disappear");
    imgAtakama.classList.toggle("image__disappear");
    table.classList.toggle("image__disappear");

    if (przycisk.innerText === "Usuń grafikę") {
        przycisk.innerText = "Przywróć grafikę";
    } else { przycisk.innerText = "Usuń grafikę"}; 

})

przycisk2.addEventListener("click", () => {
    body.classList.toggle("body__alternativeBackground");

    body.classList.contains("body__alternativeBackground") ?
        przycisk2.innerText = ("Przywróć poprzednie tło") : 
        przycisk2.innerText = ("Zmień tło")
    }
)




