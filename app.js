const viewPlanet=document.querySelector(".multiple")
const buttonOpen=document.querySelector("#open");
const buttonClose=document.querySelector("#close");
buttonOpen.addEventListener("click",()=>{
  viewPlanet.style.visibility="visible";

})
buttonClose.addEventListener("click", ()=>{
  viewPlanet.style.visibility="hidden";
})


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

const tutorialButton=document.querySelector(".tutorial");
const popupTutorial=document.querySelector(".popup-tutorial");
const closePopupTutorial=document.querySelector(".popup-tutorial span");
tutorialButton.addEventListener("click", ()=>{
  popupTutorial.style.visibility="visible";
})

closePopupTutorial.addEventListener("click", ()=>{
  popupTutorial.style.visibility="hidden";
})

const rocket = document.querySelector(".rocket img");
let clickCount=0;
rocket.addEventListener("click", ()=>{
  clickCount++;
  const numberOfPoints=document.querySelector("#numberOfPoints");
  numberOfPoints.innerHTML=clickCount;

  const addedOne = document.querySelector(".added-one");
  addedOne.style.visibility = "visible";
  addedOne.classList.add("added-one-animation");
  setTimeout(() => {
    addedOne.style.visibility = "hidden";
  }, 125);
})