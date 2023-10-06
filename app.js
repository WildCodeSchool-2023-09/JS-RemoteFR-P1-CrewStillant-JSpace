// popup connexion

const popup = document.querySelector(".popup");
const pseudo = document.querySelector(".pseudo");
const loading = () => {
  if (pseudo.innerHTML === "") {
    popup.style.visibility = "visible";
  }
};
window.addEventListener("load", loading);

const login = document.querySelector(".popup .btn");
login.addEventListener("click", () => {
  const input = document.querySelector("#login");
  const inputValue = input.value;
  pseudo.innerHTML = inputValue;
  popup.style.visibility = "hidden";
});

pseudo.addEventListener("click", () => {
  popup.style.visibility = "visible";
});

// nombre de clique sur la fusÃ©e.
const addedOne = document.querySelector(".added-one");

const rocket = document.querySelector(".rocket img");
let count = 0;
rocket.addEventListener("click", () => {
  count++;
  const numberClicque = document.querySelector(".infoBar h2 span");
  numberClicque.innerHTML = count;
  addedOne.style.visibility = "visible";
  addedOne.classList.add("cliq");
  setTimeout(() => {
    addedOne.style.visibility = "hidden";
  }, 125);
});

// clique sur didacticiel

const popuptutorial=document.querySelector(".popup-tutorial");
const buttontutorial= document.querySelector(".tutorial");
buttontutorial.addEventListener("click", ()=>{
popuptutorial.classList.toggle("displayPopup");
}) 

//Multi

const open = document.querySelector(".slidingButton")
const menu = document.querySelector(".multiplicator")
const close = document.querySelector(".close")

open.addEventListener('click', () => {
    document.querySelector(".multiplicator").style.marginLeft = "-12rem";
});

close.addEventListener("click", () => {
  document.querySelector(".multiplicator").style.marginLeft = "12rem";
});

//const body= document.querySelector("body");
//body.addEventListener("click", ()=>{
//popuptutorial.style.visibility="hidden"})

let backgroundPlanete = [
    "URL('/img/terre_fond.png')",
    "URL('/img/mars_fond.png')",
    "URL('/img/jupiter_fond.png')",
    "URL('/img/saturn_fond.png')",
    "URL('/img/uranus_fond.png')",
    "URL('/img/neptune_fond.png')",
    "URL('/img/js_fond.png')",
];

let clickCount = 0;
let changePlanete = [10, 20, 30, 40, 50, 60, 70];

let currentBackgroundIndex = 0;
const voyageButton = document.getElementById("travel");

voyageButton.addEventListener("click", () => {
   changeBackgroundButton();
   document.getElementById("background-image").style.visibility = "visible"
});

function changeBackgroundButton() {
    document.getElementById("background-image").style.backgroundImage = backgroundPlanete[currentBackgroundIndex];
    voyageButton.className = "";
}

//Faire clignoter le bouton "voyage"

rocket.addEventListener("click", () => {
  clickCount++;
  if (changePlanete.includes(clickCount)) {
    voyageButton.className = "blink"
    currentBackgroundIndex = changePlanete.indexOf(clickCount)
  }
});  