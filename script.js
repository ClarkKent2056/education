const menu = document.querySelector('.menu')
const menuLink = document.querySelector('.navheader')

menu.addEventListener('click' = () => {
    menu.classList.toggle('open')
    menuLink.classList.toggle('close')
})
menu.addEventListener('touchstart', ()=>{
    menu.classList.toggle('open')
    menuLink.classList.toggle('close')
})