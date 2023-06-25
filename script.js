const menu = document.querySelector('.menu')
const menuLink = document.querySelector('.navheader')

menu.onclick = () => {
    menu.classList.toggle('open')
    menuLink.classList.toggle('close')
}