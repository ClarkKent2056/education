const menu = document.querySelector('.menu')
const menuLink = document.querySelector('.navheader')
const openClose = () => {
    menu.classList.toggle('open')
    menuLink.classList.toggle('close')
}
menu.addEventListener('click' = () => {
    openClose()
})
menu.addEventListener('touchstart', ()=>{
   openClose()
})