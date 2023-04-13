const links = document.getElementsByClassName("navbar")[0];
const hamburguer = document.getElementsByClassName("hamburguer")[0];
const menuhamburguer = document.getElementById("hamburguer");
let abierto =false;

const toggleMenu = () =>{
    links.classList.toggle("display-navbar");
    links.style.transition = "transform 0.5s ease-in-out";
}

hamburguer.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".navbar.display-navbar")){
        abierto = true;
    }
    else{
        abierto = false;
    }
})

window.addEventListener("click", function(e){
    if(abierto){
        if(e.target !== menuhamburguer){
            toggleMenu();
            abierto = false;
        }
    }
    
})