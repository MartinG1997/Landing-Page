const hamburguerIcon = document.querySelector('.nav-hamb');
const navOverlay = document.querySelector('.nav-overlay')

hamburguerIcon.addEventListener('click', ()=>{
    hamburguerIcon.classList.toggle('nav-hamb-op');

    navOverlay.classList.toggle('nav-overlay-show');
});

navOverlay.addEventListener('click', (e)=>{
    e.preventDefault();
    const currentElement = e.target;
    if(isActive(currentElement,'nav-parent')){
        const subMenu = currentElement.parentElement.children[1];
        if(window.innerWidth < 768){
            let height = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;
            subMenu.style.height = `${height}px`;
        }
        else{

        }
    };
})

function isActive(element, string){
    return element.classList.value.includes(string);
}