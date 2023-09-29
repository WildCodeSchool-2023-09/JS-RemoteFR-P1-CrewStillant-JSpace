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
  const numberClicque = document.querySelector(".informationBarre h2 span");
  numberClicque.innerHTML = count;
  addedOne.style.visibility = "visible";
  addedOne.classList.add("cliq");
  setTimeout(() => {
    addedOne.style.visibility = "hidden";
  }, 125);
});

// clique sur didacticiel

const popupDidacticiel = document.querySelector(".popup-didacticiel");
const buttonDidacticiel = document.querySelector(".didacticiel");
buttonDidacticiel.addEventListener("click", () => {
  popupDidacticiel.classList.toggle("displayPopup");
});

// const body= document.querySelector("body");
// body.addEventListener("click", ()=>{
//     popupDidacticiel.style.visibility="hidden"

// })
const Button = document.createElement("Button");
Button.classList.add("voyage");
Button.innerHTML = "Voyage";
Button.appendChild(Button);

const buttonVoyage = document.getElementById("buttonVoyage");
const gameBackground = document.getElementById("gameBackground");

buttonVoyage.addEventListener("click", () => {
  const terreBackgroundImage = "url ('image/terre_fond')";
});
