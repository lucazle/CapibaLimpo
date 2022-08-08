const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', (open) => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})