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

const popupDidacticiel=document.querySelector(".popup-didacticiel");
const buttonDidacticiel= document.querySelector(".didacticiel");
buttonDidacticiel.addEventListener("click", ()=>{
popupDidacticiel.classList.toggle("displayPopup");
    
})
const open = querySelector(".mulitplicateurs")
const menu = querySelector(".multiplicateur")

function w3_open() {
    document.querySelector(".multiplicateur").style.display = "block";
  }

const open = querySelector(".mulitplicateurs")
const menu = querySelector(".multiplicateur")

function w3_open() {
    document.querySelector(".multiplicateur").style.display = "block";
  }