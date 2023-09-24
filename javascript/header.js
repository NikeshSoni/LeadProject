
const getName = document.querySelector(".ham-bar");
const hide = document.querySelector(".toggle");


const main = document.querySelector(".main-class");

hide.addEventListener("click" , () =>{
    main.classList.toggle("remove")
    if (getName.classList.contains("fa-bars")) {
        getName.classList.replace("fa-bars" , "fa-xmark")
    } else {
        getName.classList.replace("fa-xmark", "fa-bars" )
    }
})

