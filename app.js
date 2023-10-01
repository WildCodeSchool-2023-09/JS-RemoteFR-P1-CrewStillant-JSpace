const popup=document.querySelector(".popup")
const pseudo=document.querySelector(".pseudo");
const loading=()=>{
    if(pseudo.innerHTML===""){
        popup.style.visibility="visible";
    }
    }
window.addEventListener("load", loading);

const login=document.querySelector(".popup .btn");
login.addEventListener("click",()=>{
    const input=document.querySelector("#login")
    const inputValue=input.value;
    pseudo.innerHTML=inputValue;
    popup.style.visibility="hidden";
    const sayHello= document.querySelector(".pseudo span");
    // sayHello.innerHTML="Bonjour "

    // setTimeout(()=>{
    //     sayHello.innerHTML=""
    // }, 2000)

});

const slidingMenu=document.querySelector(".sliding_menu");
const buttonMultiplicateurs=document.querySelector(".mulitplicateurs");


