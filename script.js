const menu = document.querySelector('.menu')
const menuLink = document.querySelector('.navheader')
function openClose(){
    menu.classList.toggle('open')
    menuLink.classList.toggle('close')  
}

menu.onclick = openClose;

