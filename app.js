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

// nombre de clique sur la fusée.
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

const popupDidacticiel=document.querySelector(".popup-didacticiel");
const buttonDidacticiel= document.querySelector(".tutorial");
buttonDidacticiel.addEventListener("click", ()=>{
popupDidacticiel.classList.toggle("displayPopup");
    
})
const open = document.querySelector(".slideButton")
const menu = document.querySelector(".multiplicator")
const close = document.querySelector(".close")

open.addEventListener('click', () => {
    document.querySelector(".multiplicator").style.display = "block";
});

const body= document.querySelector("body");
body.addEventListener("click", ()=>{
popupDidacticiel.style.visibility="hidden"

})

let clickCount = 0;
let backgroundPlanete = [
    "URL('/img/terre_fond.png')",
    "URL('/img/mars_fond.png')",
    "URL('/img/jupiter_fond.png')",
    "URL('/img/saturn_fond.png')",
    "URL('/img/uranus_fond.png')",
    "URL('/img/neptune_fond.png')",
    "URL('/img/js_fond.png')",
];

let changePlanete = [10, 20, 30, 40, 50, 60, 70];

let currentBackgroundIndex = 0;

const voyageButton = document.getElementById("travel");

voyageButton.addEventListener("click", () => {
   clickCount++;
});

function changeBackgroundButton() {
    if (clickCount === changePlanete[0]) {
        document.getElementById("background-image").style.backgroundImage = backgroundPlanete[0];
    }
    if (clickCount === changePlanete[1]) {
        document.getElementById("background-image").style.backgroundImage = backgroundPlanete[1];
    }
    if (clickCount === changePlanete[2]) {
        document.getElementById("background-image").style.backgroundImage = backgroundPlanete[2];
    }
    if (clickCount === changePlanete[3]) {
        document.getElementById("background-image").style.backgroundImage = backgroundPlanete[3];
    }
    if (clickCount === changePlanete[4]) {
        document.getElementById("background-image").style.backgroundImage = backgroundPlanete[4];
    }
    if (clickCount === changePlanete[5]) {
        document.getElementById("background-image").style.backgroundImage = backgroundPlanete[5];
    }
    if (clickCount === changePlanete[6]) {
        document.getElementById("background-image").style.backgroundImage = backgroundPlanete[6];
    }
}

close.addEventListener("click", () => {
    document.querySelector(".multiplicator").style.display = "none";
});
